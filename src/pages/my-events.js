import React from 'react'
import { Typography, Snackbar } from '@material-ui/core'
import Table from '../components/table'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const MyEvents = () => {
    const userId = localStorage.getItem('eventiha.userId')
    const events = useSelector(store => store).filter(event => event.userId == userId)

    return <div>
        <Typography variant="h4">My events</Typography>
        <Table data={events} />
    </div>
}

export default MyEvents
