import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, makeStyles, Grid, TextField, Avatar } from '@material-ui/core'
import AuthContext from './../../context/user_context';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
}));

const retrieveUser = async (user) => {
    const profileId = user.id;
    
    await Axios.get(`http://localhost:3001/auth/profile/${profileId}`);
}

export default function Profile() {
    // Styles for Our Component
    const classes = useStyles();
    const paddingTop = { paddingTop: 40 }

    // Needed to hold the history and working user context of our application.
    const history = useHistory();
    const { loggedIn } = useContext(AuthContext);

    // Holding the information about our user.


    return (
        <div className = {classes.root}>
            <Grid container justify = "center" spacing = "3" direction = "row" style = {paddingTop} />
            <Grid item/>
        </div>

    )
}