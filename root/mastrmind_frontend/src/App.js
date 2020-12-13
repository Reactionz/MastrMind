import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/auth/LoginPage';
import Register from './components/auth/RegisterPage';
import Header from './components/layout/Header';
import UserContext from './context/user_context';
import Axios from 'axios';

import "./layout.css";

export default function App() {
    
    const [userData, setUserData ] = useState({
        token: undefined,
        user: undefined,
    });
    // return <div>App</div>


    useEffect( () => {
            const loginCheck = async () => {
                let token = localStorage.getItem("auth-token");
                console.log("hi");
                if (token === null) { 
                    localStorage.setItem("auth-token", "");
                    token = "";
                }

                const tokenResponse = await Axios.post(
                    "http://localhost:8080/users/isTokenValid", 
                    null,
                    { headers: { "x-auth-token": token} }
                );
                
                console.log(tokenResponse)
                if (tokenResponse.data) {
                    const userResponse = await Axios.get(
                        "http://localhost:8080/users/",
                        { headers: { "x-auth-token": token }, 
                    });     
                    
                    setUserData({
                        token,
                        user: userResponse.data,
                    });
                }
            };  

            loginCheck();
    }, []);

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value = {{userData, setUserData}}>
                    <Header />
                        <Switch>
                            {/* use exact in order to make sure that it will always go to the correct route */}
                            <Route exact path="/" component={Home} />       
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                        </Switch>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    );
}
