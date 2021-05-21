import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [ loggedIn, setLoggedIn ] = useState(undefined);
    const [ userProfile, setUserProfile ] = useState({});
    const [ loading, setLoading] = useState(true); // make true

    async function getLoggedIn() {
        const userLoginResponse = await axios.get(
            "http://localhost:3001/auth/loggedIn"
        );
        setLoggedIn(userLoginResponse.data);
    }

    async function getUser() {
        await axios.get(
            "http://localhost:3001/auth/profile",
            {crossdomain: true}
        ).then((response) => {
            setUserProfile(response.data);
            setLoading(false)
            console.log(response.data);
        });
    }

    useEffect( () => {
        getLoggedIn();     
        getUser();
    }, []);

    return (
        <AuthContext.Provider value = { { loggedIn, getLoggedIn, userProfile, loading} } >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };

