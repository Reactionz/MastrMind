import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context";
import Axios from "axios";
import { TextField, makeStyles, Button, Grid, Paper, Typography } from '@material-ui/core'

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
    const paddingTop = { paddingTop: 40}
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { setUserData } = useContext(userContext);
    const history = useHistory();

    const formSubmit = async (e) => {
        e.preventDefault();
        const userLogin = { email, password};
        const loginResponse = await Axios.post("http://localhost:8080/users/login", userLogin);

        setUserData({
            token: loginResponse.data.token,
            user: loginResponse.data.user
        });

        localStorage.setItem("auth-token", loginResponse.data.token);
        history.push("/");  // would redirect to an account page but I'll research into that.
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
                    Sign in
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
                            onChange = {e => setEmail(e.target.value)}
                            required
                            autoFocus/>
                    </Grid>
                    <Grid item>
                    <TextField label="Password" 
                            type ="password" 
                            id = "login-password" 
                            fullWidth
                            variant="outlined"
                            onChange = {e => setPassword(e.target.value)}
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
    )
}
