import React from 'react'
import { Drawer, IconButton, List, Divider, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { ChevronLeft as ChevronLeftIcon, Today as TodayIcon, AddCircle as AddCircleIcon, Settings as SettingsIcon, ExitToApp as ExitToAppIcon } from '@material-ui/icons'

import useStyle from '../styles'
import { Link } from 'react-router-dom'

const AppDrawer = (props) => {
    const styles = useStyle()

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return <Drawer
        className={styles.drawer}
        classes={{ paper: styles.drawerPaper }}
        variant="persistent"
        anchor="left"
        open={props.open}>
        <div className={styles.drawerHeader}>
            <IconButton onClick={props.toggleOpen}>
                <ChevronLeftIcon />
            </IconButton>
        </div>

        <Divider />

        <List>
            <Link to="/" className={styles.drawerLink} onClick={props.toggleOpen}>
                <ListItem button>
                    <ListItemIcon><TodayIcon /></ListItemIcon>
                    <ListItemText primary="All events" />
                </ListItem>
            </Link>


            <Link to="/my-events" className={styles.drawerLink} onClick={props.toggleOpen}>
                <ListItem button>
                    <ListItemIcon><TodayIcon /></ListItemIcon>
                    <ListItemText primary="My events" />
                </ListItem>
            </Link>

            <Link to="/add-event" className={styles.drawerLink} onClick={props.toggleOpen}>
                <ListItem button>
                    <ListItemIcon><AddCircleIcon /></ListItemIcon>
                    <ListItemText primary="Add Event" />
                </ListItem>
            </Link>

            <Link to="/settings" className={styles.drawerLink} onClick={props.toggleOpen}>
                <ListItem button>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </Link>
        </List>

        <Divider />

        <List>
            <ListItem button onClick={logout}>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </List>
    </Drawer>
}

export default AppDrawer
