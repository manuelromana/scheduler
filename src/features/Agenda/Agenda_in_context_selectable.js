import * as React from "react"
import Agenda from "../../Components/Agenda"
import { AgendaNetworkContext } from "./AgendaNetworkContext"
import { make_utc_readable } from "../../utils"

export const AgendaInContext = () => {
    const { open_dialog, setdate_selected, data_query, del_event_onclick_event } = React.useContext(AgendaNetworkContext)
    console.log("data", data_query);
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
    console.log("newarray", arrayForAgenda);

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
                    (event) => action_on_click_event(event)
                }
                onSelectSlot={(slot) => {
                    open_dialog()
                    setdate_selected(slot)
                }}
            >

            </Agenda>
        </React.Fragment>
    )
}