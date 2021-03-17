import React from 'react'
import Controller from '../controller/controller'
import Popup from  '../controller/popup'
import newtask from '../newtask'
import { useState } from "react";
import TextField from '@material-ui/core/TextField';

export default function Home() {
    const [openPopup, setOpenPopup] = useState(false)
    
    return (
    <body>
        /*This portion of the code creates the add task button*/
        <Controller.Button
        text = "Add Task +"
        variant = "outlined"
        onClick = {() => setOpenPopup(true)}
        />
        /*This popup must be with the button above. If you want to
        move the button, then include this with it.*/
        <Popup
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
        >
        </Popup>
    </body>
    )
}
