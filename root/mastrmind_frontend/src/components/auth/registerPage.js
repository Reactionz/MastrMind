import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context";
import Axios from 'axios';

export default function RegisterPage() {

    const [email, setEmail] = useState();
    const [password, setPassword ] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
    const [username, setUserName ] = useState();

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
        await Axios.post("http://localhost:8080/users/register", newUser);
        
        const loginResponse = await Axios.post(
            "http://localhost:8080/users/login", 
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
            <h2>Registration</h2>
            <form onSubmit = {formSubmit} >
                <label htmlFor = "register-email"> Email </label>
                <input type = "email" id = "register-email" onChange = {e => setEmail(e.target.value)}/>

                <label htmlFor = "register-password"> Password </label>
                <input type ="password" id = "register-password" onChange = {e => setPassword(e.target.value)}/>

                <label htmlFor = "register-verify-password"> Verify Password </label>
                <input type = "password" id = "register-verify-password" placeholder = "Verify Password" onChange = {e => setVerifyPassword(e.target.value)} />

                <label htmlFor = "register-username"> Username </label>
                <input id = "register-username" type = "text" onChange = {e => setUserName(e.target.value)}/>

                <input type = "submit" value = "Register" />
            </form>
        </div>
    )
}
