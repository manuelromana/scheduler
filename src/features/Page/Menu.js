import React, { useState } from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ProfileIcon from '@material-ui/icons/AccountCircle'
import RequestIcon from '@material-ui/icons/Http'
import AgendaIcon from '@material-ui/icons/Today'
import { Link } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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
    // nested: {
    //     paddingLeft: theme.spacing(4),
    // }

}));

const list_items = [{ text: "Profile", link: "/profile", icon: <ProfileIcon></ProfileIcon> }, { text: "test", link: "/test", icon: <RequestIcon></RequestIcon> }, { text: "Agenda", link: "/agenda", icon: <AgendaIcon></AgendaIcon> }]

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
    const [state, setState] = useState(open)
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
            {/* <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer> */}
        </div>
    )
}

export default Menu;
