import React from 'react';
import Router from './Router'
import { AuthContextProvider } from './context/user_context';
import axios from 'axios';

import "./layout.css";

axios.defaults.withCredentials = true; // MAKE SURE THIS INCLUDED OR IT WILL NOT WORK


function App() {
    return (
        <AuthContextProvider>
            <Router/>
        </AuthContextProvider>
    )
}

export default App;
