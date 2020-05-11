import * as React from "react"
import { useQuery, useMutation } from '@apollo/react-hooks';
import * as Query_events from "../Events/query_events"
import * as Mutation_events from "../Events/mutations_events"
import Agenda from "../../Components/Agenda"
import { make_utc_readable } from "../../utils"

export const AgendaNetworkContext = React.createContext()

export const AgendaNetworkContextProvider = ({ children }) => {

    const [open, setopen_dialog] = React.useState(false)
    const [slot_selected, setSlot] = React.useState()

    const [date_selected, setdate_selected] = React.useState()

    const { data: data_query, loading: loading_query, error: error_query } = useQuery(Query_events.GET_ALL_EVENTS,
        { fetchPolicy: 'network-only' }
    )

    const close_dialog = () => setopen_dialog(false)

    const [pushEvent] = useMutation(Mutation_events.EVENT_PUSH,
        {
            onError(error) {
                console.log(error)
            }
        }
    );

    const onSubmit = () => console.log("toto")

    console.log(data_query, loading_query, error_query);
    console.log("datefromcontext", date_selected);

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

                onSubmit
            }}
        >
            {children}
        </AgendaNetworkContext.Provider>

    )
}