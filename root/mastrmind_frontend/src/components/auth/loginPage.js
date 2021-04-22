import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField, makeStyles, Button, Grid, Paper, Typography } from '@material-ui/core';
import AuthContext from "../../context/user_context";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
}));

export default function LoginPage() {

    const classes = useStyles();
    const paddingTop = { paddingTop: 40 };
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loggedIn, getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function formSubmit(e){
        console.log("submitting login form");
        e.preventDefault();

        try {

            const userLogin = { email, password, };
            await axios.post("http://localhost:3001/auth/login", userLogin);
            await getLoggedIn();
            // localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/dashboard");  // would redirect to an account page but I'll research into that.

        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
        { loggedIn === false ?
            <div className = "form-page">
                <Grid container justify="center" spacing="3" direction="row" style={paddingTop}>
                <Grid item>
                <Grid container direction="column"
                    spacing="" 
                    justify="center"
                    className="login-form">
                <Paper
                    variant="elevation"
                    elevation={2}
                    className="login-background"
                >
                    <Grid item>
                    <Typography component="h1" variant="h5" align="center">
                        Sign In
                    </Typography>
                    </Grid>
                    <Grid item>
                    <form onSubmit = {formSubmit} className={classes.root}>
                        <Grid container direction="column" spacing={2}>
                        <Grid item>
                        <TextField label="Email" 
                                type = "email" 
                                id = "login-email" 
                                fullWidth
                                variant="outlined"
                                onChange = {(e) => setEmail(e.target.value)}
                                value = {email}
                                required
                                autoFocus/>
                        </Grid>
                        <Grid item>
                        <TextField label="Password" 
                                type ="password" 
                                id = "login-password" 
                                fullWidth
                                variant="outlined"
                                onChange = {(e) => setPassword(e.target.value)}
                                value = {password}
                                required/>
                        </Grid>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" 
                                color="primary" 
                                type = "submit"
                                fullWidth
                                className="button-block" 
                                value = "login">Login</Button>
                        </Grid>
                    </form>
                    </Grid>
                </Paper>
                </Grid>
                </Grid>
                </Grid>
            </div>
        : 
            <Redirect to = '/'></Redirect>
        }
        </>
    );
}
