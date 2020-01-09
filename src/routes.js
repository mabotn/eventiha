import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router'

import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import AddEvent from './pages/add-event'
import MyEvents from './pages/my-events'
import Settings from './pages/settings'

import Appbar from './components/appbar'
import AppDrawer from './components/drawer'

import useStyle from './styles'

import EventActions from './actions/events'
import EventServices from './services/events'

const Routes = function () {
    const styles = useStyle()
    const dispatcher = useDispatch()
    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const is_logged = localStorage.getItem('eventiha.userId')

    const toggleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    }

    useEffect(() => {
        EventServices.GetAll().then((response) => {
            dispatcher(EventActions.Fetch(response.data))
        })
    }, [dispatcher])

    if (is_logged) {
        return <>
            <CssBaseline />
            <Appbar open={drawerOpen} toggleOpen={toggleDrawerOpen} />
            <AppDrawer open={drawerOpen} toggleOpen={toggleDrawerOpen} />
            <main className={clsx(styles.content, { [styles.contentShift]: drawerOpen })}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/add-event' component={AddEvent} />
                    <Route exact path='/my-events' component={MyEvents} />
                    <Route exact path='/settings' component={Settings} />
                    <Redirect from='/' to='/' />
                </Switch>
            </main>
        </>
    } else {
        return <>
            <CssBaseline />
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Redirect from='/' to='/login' />
            </Switch>
        </>
    }
}

export default Routes
