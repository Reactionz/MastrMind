import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context"
import {Button, Menu, MenuItem } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AuthContext  from "../../context/user_context"
import { createUseStyles } from 'react-jss'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        color: 'white',
      }
    }
  }
});

export default function Options() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { userData, setUserData, loggedIn } = useContext(AuthContext);
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
    
    const dashboard = () => {
      history.push("/dashboard");
      setAnchorEl(null);
    }

    const journal = () => {
      history.push("/journal");
      setAnchorEl(null);
    }

    return (
        <nav className="options">
          {loggedIn === true ? (
            <>
            <div>
              <ThemeProvider theme={theme}>
              <Button size="large" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
              </Button>
              </ThemeProvider>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick = {dashboard}> Dashboard </MenuItem>
                <MenuItem onClick = {journal}> Journal </MenuItem>
                <MenuItem onClick = {profile}> Profile </MenuItem>
                <MenuItem onClick={logout} >Logout </MenuItem>

              </Menu>
            </div>
            </>
          ) : (
            <>
              <div>
                <ThemeProvider theme={theme}>
                <Button size="large" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                  Menu
                </Button>
                </ThemeProvider>
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
