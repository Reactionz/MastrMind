import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context"
import {Button, Menu, MenuItem } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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

    const { userData, setUserData } = useContext(userContext);
    // console.log(userData);
    const history = useHistory();

    const registration = () => {
        history.push("/register");
        setAnchorEl(null);
    };
    const login = () => {
        history.push("/login");
        setAnchorEl(null);
    };
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
        setAnchorEl(null);
    };

    return (
        <nav className="options">
          {userData.user ? (
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
                <MenuItem onClick={logout} >Logout</MenuItem>
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
                  <MenuItem onClick={registration} >Register</MenuItem>
                  <MenuItem onClick={login}>Login</MenuItem>
                </Menu>
              </div>
            </>
            
          )}
        </nav>
      );
}
