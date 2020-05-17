import * as React from "react"
import Agenda from "../../Components/Agenda"
import { AgendaNetworkContext } from "./AgendaNetworkContext"

export const AgendaPublic = () => {
    const { data_query } = React.useContext(AgendaNetworkContext)
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

    return (
        <React.Fragment>
            <Agenda
                isSelectable={false}
                myEventsList={arrayForAgenda}

            >

            </Agenda>
        </React.Fragment>
    )
}