import moment from "moment"

export const momentToDatePSQL = (datefromcalendar) => {
    var day = moment(datefromcalendar).format()
    return (
        day
    )
}

export const make_utc_readable = (datefromcalendar) => {
    var day = moment(datefromcalendar).format("dddd DD-MM-YYYY HH:mm")
    return (
        day
    )
}