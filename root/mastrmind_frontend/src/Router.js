import React, { useContext, useState } from "react";
import Loader from 'react-loader-spinner'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/auth/loginPage";
import Register from "./components/auth/registerPage";
import LogOut from "./components/auth/logout";
import Header from './components/layout/header';
import AuthContext from "./context/user_context";
import Profile from "./components/pages/Profile";
import Calendar from "./components/pages/Calendar";
import Journal from "./Journal"


//TODO: Create a helper function to help handle events.

function Router() {
    // Needed to give context to our application.
    const { loggedIn, getLoggedIn, userProfile, getUser, setUser, loading } = useContext(AuthContext);
    return (
        
        <BrowserRouter>
            <AuthContext.Provider value = {{getLoggedIn, loggedIn, userProfile, getUser, setUser, loading}}>
                <Header />
                <Switch>
                    {/* use exact in order to make sure that it will always go to the correct route */}
                    { loggedIn === false && (
                        <>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            </>
                    )} 
                    { loggedIn === true && (
                        // having troubles getting the profile page to display after rendering our initial calendar
                        <>
   
                            <Route path = "/journal">
                                <Journal/>
                            </Route>
                            <Route path="/logout">
                                <LogOut />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path = "/calendar">
                                <Calendar/>
                            </Route>
                    
                        </>
                    )}
    
                </Switch>
                </AuthContext.Provider>
        </BrowserRouter>
    );
}

export default Router;