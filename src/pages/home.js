import React from 'react'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Calendar from '../components/calendar'

const Home = () => {
    const events = useSelector(store => store)

    return <div>
        <Typography variant="h4">All events</Typography>
        <Calendar events={events} />
    </div>
}

export default Home
