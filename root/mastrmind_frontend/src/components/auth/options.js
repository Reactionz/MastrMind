import React from 'react'
import { useHistory } from "react-router-dom";

export default function Options() {
    const history = useHistory();

    const registration = () => history.push("/register");
    const login = () => history.push("/login");

    return (
        <nav className = "options">
            <button onClick = {registration}> Register </button>
            <button onClick = {login} > Login </button>
        </nav>
    )
}
