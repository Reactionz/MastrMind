import React, { useContext }from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from "../../context/user_context";

export default function Home() {
    
    const history = useHistory();
    const { loggedIn } = useContext(AuthContext);

    return (
        <>
        { loggedIn === true && (
            <div> You're Logged In! </div>
        )}
        { loggedIn === false && (
        <div>
            Please Login!
        </div>
        )}
        </>
    );
}
