import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context";
import Axios from 'axios';
import { TextField, makeStyles, Button, Grid, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
}));

export default function RegisterPage() {

    const classes = useStyles();

    const [email, setEmail] = useState();
    const [password, setPassword ] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
    const [username, setUserName ] = useState();

    const paddingTop = { paddingTop: 40 }

    const { setUserData } = useContext(userContext);
    const history = useHistory();

    const formSubmit = async (e) => {
        e.preventDefault(); // allows page to not reload

        const newUser = { email, password, verifyPassword, username };
        // const registrationResponse = await Axios.post(
        //     "http://localhost:8080/users/register",
        //     newUser
        // );
        console.log(newUser);
        console.log("posting"); 
        await Axios.post("http://localhost:3000/users/register", newUser);
        
        const loginResponse = await Axios.post(
            "http://localhost:3000/users/login", 
            {
                email, 
                password
        
            }
        );

        setUserData({
            token: loginResponse.data.token,
            user: loginResponse.data.user
        });

        localStorage.setItem("auth-token", loginResponse.data.token);   // save jwt to browser
        history.push("/"); // take back to home page
    }

    return (
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
                    Registration
                </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={formSubmit} className={classes.root}>
                    <Grid container direction="column" spacing={2}>
                    <Grid item>
                    <TextField label="Email" 
                            type = "email" 
                            id = "register-email" 
                            fullWidth
                            variant="outlined"
                            onChange = {e => setEmail(e.target.value)}
                            required
                            autoFocus/>
                    </Grid>
                    <Grid item>
                    <TextField label="Password" 
                            type ="password" 
                            id = "register-password" 
                            fullWidth
                            variant="outlined"
                            onChange = {e => setPassword(e.target.value)}
                            required/>
                    </Grid>
                    <Grid item>
                    <TextField label="Verify Password" 
                            type = "password" 
                            id = "register-verify-password" 
                            fullWidth
                            variant="outlined"
                            onChange = {e => setVerifyPassword(e.target.value)} 
                            required/>
                    </Grid>
                    <Grid item>
                    <TextField label="Username" 
                            id = "register-username" 
                            type = "text" 
                            fullWidth
                            variant="outlined"
                            onChange = {e => setUserName(e.target.value)}
                            required/>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Button variant="contained" 
                            color="primary"
                            type = "submit" 
                            fullWidth
                            className="button-block"
                            value = "register">Register</Button>
                    </Grid>
                </form>
                </Grid>
            </Paper>
            </Grid>
            </Grid>
            </Grid>
        </div>
    )
}
