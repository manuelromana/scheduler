import React from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

// let myEventsList = [
//     //     {
//     //     id: 0,
//     //     title: 'All Day Event very long title',
//     //     allDay: true,
//     //     start: new Date(2020, 3, 1),
//     //     end: new Date(2020, 3, 1),
//     // },
//     {
//         id: 1,
//         title: 'Long Event',
//         start: new Date(),
//         end: new Date(),
//         allDay: false
//     },]

const MyCalendar = ({ myEventsList, onSelectEvent, onSelectSlot }) => (
    <div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable={true}
            onSelectEvent={onSelectEvent}
            //onSelecting={selection => console.log("selection", selection)}
            onSelectSlot={onSelectSlot}
        />
    </div>
)
export default MyCalendar