import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context"
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

    const classes = useStyles();

    return (
        <nav className="options">
          {userData.user ? (
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
                <MenuItem onClick={logout} >Logout</MenuItem>
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
                  <MenuItem onClick={registration} >Register</MenuItem>
                  <MenuItem onClick={login}>Login</MenuItem>
                </Menu>
              </div>
            </>
            
          )}
        </nav>
      );
}
