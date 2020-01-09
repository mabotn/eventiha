import React, { useState } from 'react'
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Snackbar } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import EventServices from '../services/events'
import EventActions from '../actions/events'

import useStyle from '../styles'
import { Alert } from '@material-ui/lab'

const Table = (props) => {
    const dispatcher = useDispatch()
    const styles = useStyle()
    const [deleted, setDeleted] = useState(false)

    const deleteEvent = (id) => {
        EventServices.Delete(id).then(() => {
            dispatcher(EventActions.Delete(id))
            setDeleted(true)
        })
    }

    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') return
        setDeleted(false)
    }

    return <>
        <TableContainer component={Paper} className={styles.mt20}>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Event</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(row => (
                        <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => { deleteEvent(row.id) }}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>

        <Snackbar open={deleted} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} elevation={6} variant="filled" severity="info">
                The event is now deleted
            </Alert>
        </Snackbar>
    </>
}

export default Table
