import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom'
import AuthContext from '../../context/user_context';

export default function LogOut() {
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut() {
        await axios.get('http://localhost:3001/auth/logout');
        await getLoggedIn();
        history.push('/');
    }
    
    // TODO: Make some sort of loading page but it will happen really fast so maybe I can find some sort of page to go to .
    logOut();

    return (
        <Redirect to = "/" />
    );
}