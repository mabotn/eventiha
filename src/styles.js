import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    authLogo: {
        width: '200px',
        marginBottom: '12px'
    },
    authLink: {
        textAlign: 'center',
        textDecoration: 'none'
    },
    authPaper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    authForm: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    authButton: {
        margin: theme.spacing(3, 0, 2),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerLink: {
        color: 'black',
        textDecoration: 'none'
    },
    content: {
        margin: '80px 20px',
        fontFamily: 'Roboto',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 260,
    },
    calendar: {
        marginTop: 20,
        padding: 16
    },
    table: {

    },
    error: {
        color: 'red',
        textAlign: 'center',
        margin: theme.spacing(4)
    },
    padding20: {
        padding: 20
    },
    mt20: {
        marginTop: 20
    }
}))

export default useStyles
