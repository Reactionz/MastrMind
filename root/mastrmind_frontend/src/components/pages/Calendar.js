import React from 'react';
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
    const state = {
        weekendsVisible: true,
        currentEvents: []
    }

    function handleEventDrop(arg) {
        if(window.confirm(`Would you like to add an event to ${arg.dateStr}?`)) {
        // add new event data
        currentEvents: this.state.currentEvents.concat({
            // creates a new array
            title: "New Event",
            start: arg.date,
            allDay: arg.allDay
            });
        }
    }

    function handleEventClick() {
        console.log("i am an event who has been clicked!")
    }

    return (
        <FullCalendar 
            defaultView="dayGridMonth" 
            eventTimeFormat = {{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                meridiem: false
            }}
            header = {{
                left: 'dayGridMonth,timeGridWeek,timeGridDay',
                center: 'Calendar',
                right: 'prev, next today'
            }
            }
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]} 
            intialView = 'dayGridMonth'
            editable = {true}
            selectable = {true}
            dayMaxEvents = {true}
            eventDrop = {handleEventDrop}
            eventClick = {handleEventClick}
            events = {state.currentEvents}

        />
    );
}
    
