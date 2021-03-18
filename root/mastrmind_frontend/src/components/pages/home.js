import React from 'react'
import Controller from '../controller/controller'
import Popup from  '../controller/popup'
import newtask from '../newtask'
import { useState } from "react";
import TextField from '@material-ui/core/TextField';

export default function Home() {
    const [openPopup, setOpenPopup] = useState(false)
    
    return (
    // the Controller.Button must be with the Popup in order for it to work
    // make sure they are together if you want to move them.
    <body>
        <Controller.Button
        text = "Add Task +"
        variant = "outlined"
        onClick = {() => setOpenPopup(true)}
        />
        <Popup
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
        >
        </Popup>
    </body>
    )
}
