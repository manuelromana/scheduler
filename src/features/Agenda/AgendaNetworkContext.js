import * as React from "react"
import { useQuery, useMutation } from '@apollo/react-hooks';
import * as Query_events from "../Events/query_events"
import * as Mutation_events from "../Events/mutations_events"
import { momentToDatePSQL } from "../../utils"
import { Auth0Context } from "../../react-auth0-spa"

export const AgendaNetworkContext = React.createContext()

export const AgendaNetworkContextProvider = ({ children }) => {
    const { user } = React.useContext(Auth0Context)
    const [open, setopen_dialog] = React.useState(false)
    const [slot_selected, setSlot] = React.useState()
    const [date_selected, setdate_selected] = React.useState()
    const [name_event, setName] = React.useState("")
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [event, setEvent] = React.useState(null)
    const anchorElClose = () => setAnchorEl(null)
    const { data: data_query, loading: loading_query, error: error_query } = useQuery(Query_events.GET_ALL_EVENTS,
        { fetchPolicy: 'network-only' }
    )

    const close_dialog = () => setopen_dialog(false)

    const [pushEvent] = useMutation(Mutation_events.EVENT_PUSH,
        {
            onError(error) {
                console.log("gql error push event", error)
            }
        }
    );

    const [delEvent] = useMutation(Mutation_events.DEL_EVENT,
        {
            onError(error) {
                console.log("gql error del event", error)
            }
        }
    );
    const del_event_onclick_event = (id) => {
        delEvent({
            variables: {
                id: id
            },
            refetchQueries: [{
                query: Query_events.GET_ALL_EVENTS
            }]

        })

    }

    const onSubmit = () => {
        console.log("onsubmit", date_selected.start);
        pushEvent({
            variables: {
                objects: {
                    end: `${momentToDatePSQL(date_selected.end)}`,
                    start: `${momentToDatePSQL(date_selected.start)}`,
                    title: name_event,
                    user_id: user && user.sub

                }
            },
            refetchQueries: [{
                query: Query_events.GET_ALL_EVENTS
            }]

        })
        close_dialog()

    }

    console.log("eventname", name_event, user && user.sub);

    return (
        <AgendaNetworkContext.Provider
            value=
            {{
                open,
                open_dialog: () => {
                    setopen_dialog(true)
                },
                close_dialog,
                slot_selected,
                setSlot,
                date_selected,
                setdate_selected,
                onSubmit,
                data_query,
                del_event_onclick_event,
                name_event,
                setName,
                anchorEl,
                setAnchorEl,
                anchorElClose,
                event,
                setEvent
            }}
        >
            {children}
        </AgendaNetworkContext.Provider>

    )
}