import * as React from "react"
import Agenda from "../../Components/Agenda"
import { AgendaNetworkContext } from "./AgendaNetworkContext"
import MenuPop from "../../Components/MenuPop"

export const AgendaInContext = () => {
    const { open_dialog, setdate_selected, data_query, del_event_onclick_event, anchorEl, setAnchorEl, anchorElClose, event, setEvent } = React.useContext(AgendaNetworkContext)
    if (!data_query) return <h2>loading...</h2>

    const { calendar_events } = data_query
    const arrayForAgenda = calendar_events.map((event) => {
        event = {
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),

        }
        return (
            event
        )
    })

    function action_on_click_event(event) {

        if (window.confirm(`are you sure to delete event ${event && event.title}`)) {

            del_event_onclick_event(event && event.id)
        } else {

        }


    }
    return (
        <React.Fragment>
            <Agenda
                isSelectable={true}
                myEventsList={arrayForAgenda}
                onSelectEvent={
                    (event, e) => {
                        setAnchorEl(e.currentTarget)
                        setEvent(event)
                    }
                }
                onSelectSlot={(slot) => {
                    open_dialog()
                    setdate_selected(slot)
                }}
            >

            </Agenda>
            <MenuPop anchorEl={anchorEl} anchorElClose={anchorElClose}
                delEvent={() => {
                    action_on_click_event(event)
                    anchorElClose()
                }}
                detailsEvent={() => {
                    console.log(event)
                    anchorElClose()
                }}
            >

            </MenuPop>
        </React.Fragment>
    )
}