import FullCalendar, { formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../pages/event-utils'
import Calendar from '../pages/calendar.js'
import Event from  '../controller/event.js'
import { useState } from "react";



export default function Calendarfunct(){
    const [openEvent, setOpenEvent] = useState(false)

    const [event, setEvent] = useState(false)

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
            >
            </Event>

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
                eventContent={Calendar.toStringrenderEventContent} // custom render function
                eventClick={Calendar.handleEventClick}
                eventsSet={Calendar.handleEvents} //called after events are initialized/added/changed/removed
                /* you can update Mongo DB when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */ 
            />
        </div>
    )        

}


