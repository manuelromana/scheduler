import * as  React from "react"
import MomentUtils from '@date-io/moment';
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


function TimePickerComponent({ startOrEnd, dateFromContext, setDateSelectedInContext }) {
    //const { date_selected,
    //   setdate_selected } = React.useContext(AgendaNetworkContext)

    if (!dateFromContext) {
        return <h2>charging date from context</h2>
    }


    //attribuer dynamiquement une propriété
    const { [startOrEnd]: start_or_end } = dateFromContext


    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                    value={start_or_end}
                    onChange={(date) => setDateSelectedInContext((prevstate) => {
                        return (
                            {
                                ...prevstate,
                                [startOrEnd]: date
                            }
                        )

                    })}
                    variant="inline"
                />
            </MuiPickersUtilsProvider>

        </div>
    )
}


export default TimePickerComponent;

