import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {
        console.log("inside get logged in function")
        const userLoginResponse = await axios.get(
            "http://localhost:3000/auth/loggedIn"
        );
        console.log(`user login response in get logged in: ${userLoginResponse.data}`);
        
        setLoggedIn(userLoginResponse.data);
    }

    useEffect( () => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value = { { loggedIn, getLoggedIn } } >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };

