import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Paper } from '@material-ui/core'

import useStyle from '../styles'

const Calendar = (props) => {
    const styles = useStyle()

    return <Paper className={styles.calendar}>
        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} events={props.events} />
    </Paper>
}

export default Calendar
