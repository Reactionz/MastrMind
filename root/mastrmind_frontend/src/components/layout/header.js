import React from 'react'
import { Link } from "react-router-dom";
import Options from "../auth/options";


export default function header() {
    return (
        <header id = "header">
            <Link to="/"> 
                <h1 className = "title">
                    MastrMind
                </h1> 
            </Link> 
            <Options/>
        </header>
    )
}
