import React from 'react'
import { Link } from "react-router-dom";

export default function header() {
    return (
        <div>
            <Link to="/"> 
                <h1>
                    MastrMind
                </h1> 
            </Link> 
        </div>
    )
}
