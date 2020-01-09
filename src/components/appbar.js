import React from 'react'
import clsx from 'clsx'
import { Menu as MenuIcon } from '@material-ui/icons'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'

import useStyle from '../styles'

const Appbar = (props) => {
    const styles = useStyle()

    return <AppBar position="fixed" className={clsx(styles.appBar, {
        [styles.appBarShift]: props.open
    })}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.toggleOpen}
                edge="start">
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap>
                Eventiha
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Appbar
