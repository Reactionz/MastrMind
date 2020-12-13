import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context";
import Axios from "axios";

export default function LoginPage() {
    
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
            <h2>Login</h2>
            <form onSubmit = {formSubmit}>
                <label for = "login-email"> Email </label>
                <input type = "email" id = "login-email" onChange = {e => setEmail(e.target.value)}/>

                <label for = "login-password"> Password </label>
                <input type ="password" id = "login-password" onChange = {e => setPassword(e.target.value)}/>

                <input type = "submit" value = "Login" />
            </form>
        </div>
    )
}
