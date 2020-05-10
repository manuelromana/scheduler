import React from 'react';
import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"

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

export const FormValidationEvent = ({ }) => (
    <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>

                <div>
                    <Field name="event_name">
                        {({ input: { name, value, onChange } }) => (
                            <div>
                                <TextField
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    label="event name"
                                />
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <Field name="date_selected_start">
                        {({ input: { name, value, onChange } }) => (
                            <div>
                                <TextField
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    label="start"
                                />
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <Field name="date_selected_end">
                        {({ input: { name, value, onChange } }) => (
                            <div>
                                <TextField
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    label="end"
                                />
                            </div>
                        )}
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

