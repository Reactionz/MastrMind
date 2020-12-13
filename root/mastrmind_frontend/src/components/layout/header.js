import React from 'react'
import { Link } from "react-router-dom";
import Options from "../auth/Options";


export default function Header() {
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
