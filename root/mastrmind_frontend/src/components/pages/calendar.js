import React from 'react'
import FullCalendar, { formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import Sidebar from '../layout/sidebar.js'

import './calendar.css'

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
                        weekends={this.state.weekendsVisible}
                        initialEvents={INITIAL_EVENTS} // alternatively, use 'events' setting to fetch from a feed
                        select={this.handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents} //called after events are initialized/added/changed/removed
                        /* you can update Mongo DB when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                        */ 
                    />
                </div>
            </div>
        )
    }

    renderSidebar() {
        return (
            <Sidebar />
        )
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
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

function renderSidebarEvent(event) {
    return(
        <li key={event.id}>
            <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{event.title}</i>
        </li>
    )
}
 














