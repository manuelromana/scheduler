import React, { useState } from 'react'
import Agenda from "../Components/Agenda"
import { useQuery, useMutation } from '@apollo/react-hooks';
import { EVENT_PUSH } from "./Events/mutations_events"
import * as Query_events from "./Events/query_events"
import { momentToDatePSQL, make_utc_readable } from "../utils"
import history from "../history"
import DraggableDialog from "../Components/DraggableComponent"
import { FormValidationEvent } from "./Events/Form_event"

export default function AgendaNetworking() {
    const [open_dialog, setopen_dialog] = useState(false)
    const [date_selected, setdate_selected] = useState()
    const { data: data_query, loading: loading_query, error: error_query } = useQuery(Query_events.GET_ALL_EVENTS,
        { fetchPolicy: 'network-only' }
    )

    const close_dialog = () => setopen_dialog(false)
    const [pushEvent] = useMutation(EVENT_PUSH,
        {
            onError(error) {
                console.log(error)
            }
        }
    );

    console.log(data_query, loading_query, error_query);


    return (
        <div>
            <Agenda
                myEventsList={[]}
                onSelectEvent={(event) => console.log("event", event)}
                // onSelectSlot={(slot) => pushEvent({
                //     variables: {
                //         objects: {
                //             end: `${momentToDatePSQL(slot.end)}`,
                //             start: `${momentToDatePSQL(slot.start)}`,
                //             title: "testfromagenda22",
                //             user_id: "google-oauth2|116281975602326412582"
                //         }
                //     },

                // })}
                onSelectSlot={(slot) => {
                    const selected_start_slot_string = make_utc_readable(slot.start)
                    setdate_selected(selected_start_slot_string)
                    setopen_dialog(true)
                }
                }
            >

            </Agenda>
            <DraggableDialog
                open={open_dialog}
                handleClose={close_dialog}
                date_selected={date_selected}>

                <FormValidationEvent></FormValidationEvent>
            </DraggableDialog>
        </div>
    )
}
