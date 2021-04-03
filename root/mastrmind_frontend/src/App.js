import React, {useState, useEffect} from 'react';
import Router from './Router'
import { AuthContextProvider } from './context/user_context';
import axios from 'axios';

import "./layout.css";

axios.defaults.withCredentials = true; // MAKE SURE THIS INCLUDED OR IT WILL NOT WORK


function App() {
    
    // const [userData, setUserData ] = useState({
    //     token: undefined,
    //     user: undefined,
    // });
    // return <div>App</div>

    // useEffect( () => {
    //         const loginCheck = async () => {
    //             let token = localStorage.getItem("auth-token");
    //             if (token === null) { 
    //                 localStorage.setItem("auth-token", "");
    //                 token = "";
    //             }

    //             const tokenResponse = await axios.post(
    //                 "http://localhost:3001/users/isTokenValid", 
    //                 null,
    //                 { headers: { "x-auth-token": token} }
    //             );
                
    //             console.log(tokenResponse)
    //             if (tokenResponse.data) {
    //                 const userResponse = await axios.get(
    //                     "http://localhost:3001/users/",
    //                     { headers: { "x-auth-token": token }, 
    //                 });     
                    
    //                 setUserData({
    //                     token,
    //                     user: userResponse.data,
    //                 });
    //             }
    //         };  

    //         loginCheck();
    // }, []);

    return (
        <AuthContextProvider>
            <Router/>
        </AuthContextProvider>
    )
}

export default App;
