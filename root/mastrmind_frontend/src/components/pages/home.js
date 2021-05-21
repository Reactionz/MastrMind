/*import React, { useContext }from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import AuthContext from "../../context/user_context";
import Calendar from './calendar'

export default function Home() {
    
    const history = useHistory();
    const { loggedIn } = useContext(AuthContext);

    return (
        
        <>
        { loggedIn === true && (
        <div>
            <Typography variant = "h3" >Welcome to Mastrmind! You're Logged In! </Typography>
            <Calendar />
        </div>
        
        )}
        { loggedIn === false && (
        <div>
            <Typography variant = "h3"> Welcome to Mastrmind! Please Login! </Typography>
        </div>
        )}
        </>
    );
}*/

import React from 'react'
import Calendar from './Calendar'
import Leaderboard from '../layout/leaderboard'

function Home() {
    return (
        <div>
            <Leaderboard />
        </div>
    )
}

export default Home
