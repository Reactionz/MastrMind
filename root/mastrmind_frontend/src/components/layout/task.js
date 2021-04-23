import React from 'react'
import { createEventId } from '../pages/event-utils'
import Calendar from '../pages/calendar.js'
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Controller from '../controller/controller'
import CloseIcon from '@material-ui/icons/Close';

// CSS Design for the Event
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(10),
        position: 'absolute',
        top: theme.spacing(20),
    },
    dialogTitle: {
        paddingRight: '0px'
    },
    padding: {
        padding: theme.spacing(3)
    }
}))



export default function Task() {

    const [openEvent, setOpenEvent] = useState(false)

    Calendar.state = {
        weekendsVisible: true,
        currentEvents: []
    }
    /* const { openEvent, setOpenEvent } = props; */
    const classes = useStyles();
    const CHARACTER_LIMIT = 25;
    const [values, setValues] = React.useState({ name: "", task: "" });

    const handleChange = name => task => {
        setValues({ ...values, [name]: task.target.value });
    };

    console.log("you got the popup");


    return (
        <div>
            <handleDateSelect
                openEvent={openEvent}
                setOpenEvent={setOpenEvent}
            ></handleDateSelect>

            <Dialog open={openEvent} maxWidth="sm">
                <DialogTitle position="center">
                    <div style={{ display: 'flex' }}>
                        <Typography className={classes.padding} variant="h6">
                            ADD A NEW TASK
                        </Typography>

                        <CloseIcon
                            color="secondary"
                            variant="text"
                            size="small"
                            onClick={ () => { 
                                values.name = ""; 
                                setOpenEvent(false) 
                            }}
                        />
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <FormGroup aria-label="position" column>
                        <TextField
                            label="Task Title"
                            inputProps={{
                                maxlength: CHARACTER_LIMIT
                            }}
                            value={values.name}
                            helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                            onChange={handleChange("name")}
                            margin="normal"
                            variant="outlined"
                        />

                        <Controller.Button
                            text="Add Task"
                            color="primary"
                            variant="outlined"
                            onClick={() => {
                                values.event = values.name
                                values.name = ""
                                setOpenEvent(false)
                                handleDateSelect(values.event)
                            }}
                        />
                    </FormGroup>
                </DialogContent>
            </Dialog>
        </div>
    )
}


function handleDateSelect(props, title) {
    const {  setOpenEvent, selectInfo } = props;
    let calendarApi = selectInfo.view.calendar


    calendarApi.unselect()

    if (title) {
        calendarApi.addEvent({
            id: createEventId,
            title,
            start: selectInfo.endStr,
            allDay: selectInfo.allDay
        })
    }
    setOpenEvent(false)
}

