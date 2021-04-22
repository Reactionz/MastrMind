import React from 'react'
import FullCalendar, { formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../pages/event-utils'
import Calendar from '../pages/calendar.js'


import { useState } from "react";


import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Controller from '../controller/controller'
import CloseIcon from '@material-ui/icons/Close';

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



export default function Calendarfunct(){

    const [openEvent, setOpenEvent] = useState(false)

    Calendar.state = {
        weekendsVisible: true,
        currentEvents: []
    }

    Calendar.handleWeekendsToggle = () => {
        Calendar.setState({
            weekendsVisible: !Calendar.state.weekendsVisible
        })
    }


    return(


        <div className='home-main'>
            <Event
                openEvent = {openEvent}
                setOpenEvent = {setOpenEvent}
            ></Event>


            <FullCalendar 
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev next today',
                    center: 'title', 
                    right: 'dayGridMonth timeGridWeek timeGridDay'
                }}
                initialView='dayGridMonth'
                showNonCurrentDates={true}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={Calendar.state.weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use 'events' setting to fetch from a feed
                select={() => setOpenEvent(true)}
                eventContent={Calendar.renderEventContent} // custom render function
                eventClick={Calendar.handleEventClick}
                eventsSet={Calendar.handleEvents}
                eventAdd={function(){}} //called after events are initialized/added/changed/removed
                /* you can update Mongo DB when these fire:

                eventChange={function(){}}
                eventRemove={function(){}}
                */ 
            />
        </div>
    );      

}

function Event(props) {

    const {  showEvent, setShowEvent } = props;
    const { title, children, openEvent, setOpenEvent } = props;
    const classes = useStyles();
    const CHARACTER_LIMIT = 25;
    const [values, setValues] = React.useState({
      name: "",
      event: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    console.log("you got the popup");


    return (
        <div>
         <handleDateSelect
            showEvent = {showEvent}
            setShowEvent = {setShowEvent}
        ></handleDateSelect>




        <Dialog open = {openEvent} maxWidth="sm">
            <DialogTitle position="center">
                <div style = {{display: 'flex'}}>
                    <Typography className={classes.padding} variant="h6">
                        
                        ADD A NEW EVENT 
                    </Typography>
                    
                    <CloseIcon
                    color = "secondary"
                    variant = "text"
                    size = "small"
                    onClick = {() => { values.name = ""; setOpenEvent(false);}}
                />
                </div>
            </DialogTitle>
            <DialogContent dividers>
            <FormGroup aria-label="position" column>
                <TextField
                    label="   Event Title   "
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
                    text = "Add Event"
                    color = "primary"
                    variant = "outlined"
                    onClick = {() => { values.event = values.name; values.name = ""; setOpenEvent(false); handleDateSelect(true, values.event) }}
                />

                

            </FormGroup>

            </DialogContent>
        </Dialog>

        </div>
    )
}

function handleDateSelect(props, value) {
    const {  showEvent, setShowEvent } = props;
    let title = value
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
    setShowEvent(false)
}

