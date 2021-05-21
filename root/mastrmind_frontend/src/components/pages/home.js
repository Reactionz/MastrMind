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
        { loggedIn === undefined && (
        <div>
            <Typography variant = "h3"> Welcome to Mastrmind! Please Login! </Typography>
        </div>
        )}
        </>
    );
}
