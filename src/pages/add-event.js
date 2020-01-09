import Moment from 'moment'
import React, { useState } from 'react'
import MomentUtils from '@date-io/moment'
import { Alert } from '@material-ui/lab'
import { Typography, Button, TextField, Paper, Snackbar } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

import EventServices from '../services/events'
import useStyles from '../styles'

const AddEvents = () => {
    const styles = useStyles()
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(Moment())
    const [success, setSuccess] = useState(false);

    const titleChanged = (e) => { setTitle(e.target.value) }
    const dateChanged = (e) => { setDate(e) }

    const create = (e) => {
        e.preventDefault()

        EventServices.Create(title, date.format('YYYY-MM-DD')).then(() => {
            setTitle('')
            setDate(Moment())
            setSuccess(true)
        })
    }

    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') return
        setSuccess(false)
    }

    return <div>
        <Typography variant="h4">Add new event</Typography>

        <form onSubmit={create} className={styles.mt20}>
            <Paper className={styles.padding20}>
                <TextField
                    value={title}
                    onChange={titleChanged}
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    autoFocus
                />

                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                        fullWidth
                        format="YYYY-MM-DD"
                        margin="normal"
                        label="Event date"
                        value={date}
                        onChange={dateChanged}
                    />
                </MuiPickersUtilsProvider>

                <Button
                    className={styles.authButton}
                    size="large"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Create
                </Button>
            </Paper>
        </form>

        <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} elevation={6} variant="filled" severity="success">
                Event created successfully
            </Alert>
        </Snackbar>
    </div>
}

export default AddEvents
