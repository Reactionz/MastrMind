import React, { useContext }from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import AuthContext from "../../context/user_context";

export default function Home() {
    
    const history = useHistory();
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
        </>
    );
}
