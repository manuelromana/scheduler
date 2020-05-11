import * as React from 'react';
import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import { AgendaNetworkContext } from './AgendaNetworkContext'
import TimePicker from "../../Components/TimePicker"
import moment from "moment"
import Grid from '@material-ui/core/Grid';

const ButtonSubmit = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;




export const FormValidationEvent = ({ }) => {

    const { close_dialog,
        pushEvent,
        open_dialog,
        date_selected,
        setdate_selected, onSubmit } = React.useContext(AgendaNetworkContext)
    console.log("dateform", date_selected);


    return (

        <React.Fragment>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                    <h2>start</h2>
                </Grid>
                <Grid item xs={6}>
                    <TimePicker
                        date={date_selected && date_selected.start}
                    >

                    </TimePicker>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                    <h2>end</h2>
                </Grid>
                <Grid item xs={6}>
                    <TimePicker
                        date={date_selected && date_selected.end}
                    >

                    </TimePicker>

                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" justify="flex-end">
                <Grid item xs={3}>
                    <ButtonSubmit onClick={onSubmit}>
                        Add
                </ButtonSubmit>
                </Grid>
                <Grid item xs={3}>
                    <ButtonSubmit>
                        Cancel
                </ButtonSubmit>
                </Grid>
            </Grid>
        </React.Fragment>
    )

}