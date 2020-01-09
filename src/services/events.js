import Http from 'axios'

Http.defaults.headers = {
    "Content-Type": "application/json"
}

const userId = localStorage.getItem('eventiha.userId')

const GetAll = () => {
    return Http.get(
        `http://127.0.0.1:3000/events`
    )
}

const GetMyEvents = () => {
    return Http.get(
        `http://127.0.0.1:3000/events?userId=${userId}`
    )
}

const Create = (title, date) => {
    return Http.post(
        `http://127.0.0.1:3000/events`,
        {
            title,
            date,
            userId
        }
    )
}

const Delete = (id) => {
    return Http.delete(
        `http://127.0.0.1:3000/events/${id}`
    )
}

export default {
    GetAll, GetMyEvents, Create, Delete
}
