import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/home';
import Login from './components/auth/loginPage';
import Register from './components/auth/registerPage';
import Header from './components/layout/header';

import "./layout.css";

export default function App() {
    // return <div>App</div>
    return (
        <>
            <BrowserRouter>
            <Header />
                <Switch>
                    {/* use exact in order to make sure that it will always go to the correct route */}
                    <Route exact path="/" component={Home} />       
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
