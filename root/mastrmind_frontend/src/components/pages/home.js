import React, { useContext }from 'react';
import { Typography } from '@material-ui/core';
import AuthContext from "../../context/user_context";

export default function Home() {
    
    const { loggedIn } = useContext(AuthContext);

    return (
        <>
        { loggedIn === true && (
        <div>
            <Typography variant = "h3" >Welcome to Mastrmind! You're Logged In! </Typography>
        </div>
        )}
        { loggedIn === false && (
        <div>
            <Typography variant = "h3"> Welcome to Mastrmind! Please Login! </Typography>
        </div>
        )}
<<<<<<< HEAD
        { loggedIn === undefined && (
        <div>
            <Typography variant = "h3"> Welcome to Mastrmind! Please Login! </Typography>
=======
        </>
    );
}*/

import React from 'react'
import Calendar from './calendar'
import Leaderboard from '../layout/leaderboard'

function Home() {
    return (
        <div>
            <Leaderboard />
>>>>>>> d4d6bd6 (redid the leaderboard to be less cluttered and easier to insert)
        </div>
        )}
        </>
    );
}
