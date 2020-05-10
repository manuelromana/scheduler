import * as React from "react"
import Agenda from "../../Components/Agenda"
import { AgendaNetworkContext } from "./AgendaNetworkContext"
import { make_utc_readable } from "../../utils"

export const AgendaInContext = () => {
    const { open_dialog, setdate_selected } = React.useContext(AgendaNetworkContext)

    return (
        <React.Fragment>
            <Agenda
                myEventsList={[]}
                onSelectEvent={() => console.log("event")}
                onSelectSlot={(slot) => {
                    open_dialog()
                    setdate_selected(slot.start)
                }}
            >

            </Agenda>
        </React.Fragment>
    )
}