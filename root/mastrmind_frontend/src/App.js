import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/home';
import Login from './components/auth/loginPage';
import Register from './components/auth/registerPage';
import Header from './components/layout/header';
import UserContext from './context/user_context';

import "./layout.css";

export default function App() {
    
    const {userData, setUserData } = useState({
        token: undefined,
        user: undefined,
    });
    // return <div>App</div>

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
