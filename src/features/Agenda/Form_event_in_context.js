import * as React from 'react';
import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import { AgendaNetworkContext } from './AgendaNetworkContext'
import TimePicker from "../../Components/TimePicker"
import moment from "moment"


const ButtonSubmit = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const onSubmit = (values) => console.log(values)

export const FormValidationEvent = ({ }) => {

    const { close_dialog,
        pushEvent,
        open_dialog,
        date_selected,
        setdate_selected } = React.useContext(AgendaNetworkContext)
    console.log("dateform", date_selected);


    return (
        <Form
            onSubmit={onSubmit}
            //validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                    <div>
                        <Field name="date_selected_start">
                            {({ input: { name, value, onChange } }) => {
                                var date_format = moment(date_selected).format()
                                return (
                                    <div>
                                        <TimePicker date={date_format} ></TimePicker>
                                    </div>)
                            }}
                        </Field>
                    </div>

                    <div>
                        <ButtonSubmit>
                            submit
                    </ButtonSubmit>

                    </div>
                </form>
            )}
        />
    )

}