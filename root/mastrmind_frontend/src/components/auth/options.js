import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import userContext from "../../context/user_context"

export default function Options() {
    const { userData, setUserData } = useContext(userContext);
    // console.log(userData);
    const history = useHistory();

    const registration = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <nav className="options">
          {userData.user ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <button onClick={registration}>Register</button>
              <button onClick={login}>Log in</button>
            </>
          )}
        </nav>
      );
}
