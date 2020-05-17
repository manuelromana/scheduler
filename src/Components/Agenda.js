import React from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Agenda = ({ myEventsList, onSelectEvent, onSelectSlot, isSelectable }) => (
    <div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable={isSelectable}
            onSelectEvent={onSelectEvent}
            //onSelecting={selection => console.log("selection", selection)}
            onSelectSlot={onSelectSlot}
        />
    </div>
)
export default Agenda