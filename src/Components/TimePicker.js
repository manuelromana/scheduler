import * as  React from "react"
import MomentUtils from '@date-io/moment';
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { make_utc_readable } from "../utils"


function TimePickerComponent({ date }) {
    //const date_date = new Date(date)
    const [selectedDate, setDate] = React.useState(date);
    console.log("piecker", selectedDate);
    console.log("dddddd", date)
    React.useEffect(() => setDate(date))

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                    value={selectedDate}
                    onChange={setDate}
                    variant="inline"
                />
            </MuiPickersUtilsProvider>

        </div>
    )
}

export default TimePickerComponent;

