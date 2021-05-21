import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import Sidebar from '../layout/sidebar.js'
import './calendar.css'
import Task from '../layout/task.js'

export default class Calendar extends React.Component {

    state = {
        weekendsVisible: true,
        currentEvents: []
    }

    render() {
        return (
            <div className='home'>
                {this.renderSidebar()}
                <div className='home-main'>
                    {this.renderCalendar()}
                </div>
            </div>
        )
    }

    renderSidebar() {
        return (
            <Sidebar />
        )
    }

    renderTask() {
        return(
            <Task />
        )
    }

    renderCalendar() {
        return(
            <>
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
                initialEvents={INITIAL_EVENTS} // alternatively, use 'events' setting to fetch from a feed
                // select={this.handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={this.handleEventClick}
                eventsSet={this.handleEvents}
                eventAdd={function () { }} //called after events are initialized/added/changed/removed
                /* you can update Mongo DB when these fire:
                eventChange={function(){}}
                eventRemove={function(){}}
                */
            />
            <Task></Task>
            </>
        )
    }

    handleDateSelect = (selectInfo) => {
        console.log("adding ", Task.values.event )
        
        let title = Event.values.event
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
    }

    handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
    }
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}
 
