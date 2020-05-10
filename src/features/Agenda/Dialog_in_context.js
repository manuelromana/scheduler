import * as React from "react"
import { AgendaNetworkContext } from "./AgendaNetworkContext"
import Dialog from "../../Components/DraggableComponent"
import { make_utc_readable } from "../../utils"

export default function DialogInContext({ children }) {
    const { open, date_selected, close_dialog } = React.useContext(AgendaNetworkContext)
    const custom_date = make_utc_readable(date_selected)

    return (
        <Dialog
            open={open}
            handleClose={close_dialog}
            date_selected={custom_date}
        >
            {children}
        </Dialog>
    )
}