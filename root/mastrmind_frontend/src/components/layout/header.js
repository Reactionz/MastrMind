import React from 'react'
import { Link } from "react-router-dom"
import Options from "../auth/options"
import { AppBar, Grid, Toolbar } from '@material-ui/core'

import './header.css'


export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={4}>
                        <Link to="/"> 
                            <h3 className = "title">
                                MastrMind
                            </h3> 
                        </Link> 
                    </Grid>
                    <Grid item sm={7}></Grid>
                    <Grid item sm={1}>
                        <Options /> 
                    </Grid>   
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
