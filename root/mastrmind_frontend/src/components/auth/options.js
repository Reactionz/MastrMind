import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext  from "../../context/user_context"
import {Button, Menu, MenuItem} from "@material-ui/core"
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {
    paddingTop: 9,
  }
})

export default function Options() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { userData, setUserData, loggedIn} = useContext(AuthContext);
    // console.log(userData);
    const history = useHistory();

    const registration = () => {
      history.push("/register");
      setAnchorEl(null);
    };
    const login = () => {
      console.log("going to login page");
      history.push("/login");
      setAnchorEl(null);
    };
    const logout = () => {
      console.log("going to logout");
      history.push("/logout");
      setAnchorEl(null);
    };

    const profile = () => {
      history.push("/profile");
      setAnchorEl(null);
    };
    
    const calendar = () => {
      history.push("/calendar");
      setAnchorEl(null);
    }

    const journal = () => {
      history.push("/journal");
      setAnchorEl(null);
    }

    const classes = useStyles();

    return (
        <nav className="options">
          {loggedIn === true ? (
            <>
            <div className={classes.root}>
              <Button size="large" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
                </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick = {calendar}> Calendar </MenuItem>
                <MenuItem onClick = {journal}> Journal </MenuItem>
                <MenuItem onClick = {profile}> Profile </MenuItem>
                <MenuItem onClick={logout} >Logout </MenuItem>

              </Menu>
            </div>
            </>
          ) : (
            <>
              <div className={classes.root}>
                <Button size="large" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                  Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={registration}>Register</MenuItem>
                  <MenuItem onClick={login}>Login</MenuItem>
                </Menu>
              </div>
            </>
            
          )}
        </nav>
      );
}
