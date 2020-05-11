import React, { Children } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { withStyles } from '@material-ui/core/styles';
import style from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>

            <Paper {...props} style={{ display: "flex", flexDirection: "row" }} />

        </Draggable>
    );
}

const useStyles = makeStyles((theme) => ({

    child: {
        display: "",


    }
}));


export default function DraggableComponent({ open, handleClose, children, date_selected, onSubmit }) {


    const classes = useStyles()
    return (



        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        {date_selected && `Add event for ${date_selected}`}
                    </DialogTitle>
                </Grid>
                <Grid item xs={12}>
                    <DialogContent className={classes.child}>
                        {children}
                    </DialogContent>
                </Grid>




            </Grid>
        </Dialog >

    );
}
