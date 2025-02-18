import * as React from 'react';

import styled from "styled-components"
import { AgendaNetworkContext } from './AgendaNetworkContext'
import TimePicker from "../../Components/TimePicker"
import TextField from '@material-ui/core/TextField';

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




export const FormValidationEvent = () => {

    const { close_dialog,
        date_selected,
        setdate_selected, onSubmit, name_event, setName } = React.useContext(AgendaNetworkContext)


    return (

        <React.Fragment>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <h2>name of event</h2>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={name_event} onChange={(event) => setName(event.target.value)}></TextField>


                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <h2>start</h2>
                </Grid>
                <Grid item xs={6}>
                    <TimePicker
                        startOrEnd="start"
                        dateFromContext={date_selected}
                        setDateSelectedInContext={setdate_selected}

                    >

                    </TimePicker>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <h2>end</h2>
                </Grid>
                <Grid item xs={6}>
                    <TimePicker
                        startOrEnd="end"
                        dateFromContext={date_selected}
                        setDateSelectedInContext={setdate_selected}
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
                    <ButtonSubmit onClick={close_dialog}>
                        Cancel
                </ButtonSubmit>
                </Grid>
            </Grid>
        </React.Fragment>
    )

}