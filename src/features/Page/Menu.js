import React, { useState } from 'react';
import ProfileIcon from '@material-ui/icons/AccountCircle'
import AgendaIcon from '@material-ui/icons/Today'
import { Link } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'white',
    },
    drawerContainer: {
        overflow: 'auto',
    }


}));

const list_items = [{ text: "Profile", link: "/profile", icon: <ProfileIcon></ProfileIcon> }, { text: "Agenda", link: "/agenda", icon: <AgendaIcon></AgendaIcon> }]

const ListMenu = () => {

    return (
        <React.Fragment>
            <Toolbar></Toolbar>
            <List >
                {list_items.map((item) => (
                    <ListItem button key={item.text} component={Link} to={item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )
}


function Menu({ open, handleClose }) {
    const classes = useStyles();
    return (
        <div>
            <Hidden smDown>
                <Drawer
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                >
                    {/* <Toolbar></Toolbar> */}
                    <ListMenu ></ListMenu>
                </Drawer>
            </Hidden>
            <Drawer
                open={open}
                onClose={handleClose}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}


            >
                <ListMenu></ListMenu>
            </Drawer>
        </div>
    )
}

export default Menu;
