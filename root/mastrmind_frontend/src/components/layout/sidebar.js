import React from 'react'
import Calendar from '../pages/calendar.js'
import { formatDate } from '@fullcalendar/react'
import Controller from '../controller/controller'
import Popup from  '../controller/popup'
import newtask from '../newtask'
import { useState } from "react";
import TextField from '@material-ui/core/TextField';

export default function Sidebar() {
    const [openPopup, setOpenPopup] = useState(false)

    Calendar.state = {
        weekendsVisible: true,
        currentEvents: []
    }

    Calendar.handleWeekendsToggle = () => {
        Calendar.setState({
            weekendsVisible: !Calendar.state.weekendsVisible
        })
    }

    return (
            <div className='home-sidebar'>

                <li>
                <Controller.Button
                text = "Add Task +"
                variant = "outlined"
                onClick = {() => setOpenPopup(true)}
                />
                </li>
            <Popup
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}
            >
            </Popup>



                
                <div className='home-sidebar-section'>
                    <h2>Instructions</h2>
                    <ul>
                        <li>Select dates and you will be prompted to create a new event.</li>
                        <li>Drag, drop, and resize events.</li>
                        <li>Click an event to delete it.</li>
                    </ul>
                </div>
                <div className='home-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            checked={Calendar.state.weekendsVisible}
                            onChange={Calendar.handleWeekendsToggle}
                        ></input>
                        Show/Hide Weekends
                    </label>
                </div>
                <div className='home-sidebar-section'>
                    <h2>All Events ({Calendar.state.currentEvents.length})</h2>
                    <ul>
                        {Calendar.state.currentEvents.map(renderSidebarEvent)}
                    </ul>
                </div>
            </div>
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



