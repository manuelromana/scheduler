// src/components/NavBar.js

import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Auth0Context } from "../react-auth0-spa"
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogOut from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import {

    Redirect
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));

const NavBar = ({ loadMenu }) => {

    const classes = useStyles();
    return (
        <Auth0Context.Consumer>
            {({ Login, logout, isAuthenticated, user }) => {

                return (
                    <React.Fragment>
                        <AppBar position="fixed" className={classes.appBar} >
                            <Toolbar>
                                {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={loadMenu}>
                                    <MenuIcon />
                                </IconButton> */}
                                {isAuthenticated &&
                                    <React.Fragment>
                                        <Link to="/">
                                            <Home style={{ color: "white", margin: "10px" }}></Home>
                                        </Link>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            onClick={logout}
                                            startIcon={<LogOut />}
                                        >
                                            Logout
                                  </Button>
                                    </React.Fragment>
                                }

                                {!isAuthenticated &&
                                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={Login}>
                                        login
                                    </IconButton>}

                                {/* {isAuthenticated && (
                                    <span>
                                        <Link to="/">Home</Link>&nbsp;
                                        <Link to="/profile">Profile</Link>
                                        <Link to="/Test">TEST</Link>

                                    </span>
                                )} */}

                            </Toolbar>
                        </AppBar>



                    </React.Fragment>
                )
            }
            }
        </Auth0Context.Consumer>

    );
};

export default NavBar;