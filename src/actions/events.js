const Fetch = (events) => {
    return {
        type: 'FETCH_EVENTS',
        payload: events
    }
}

const Add = (event) => {
    return {
        type: 'ADD_EVENT',
        payload: event
    }
}

const Delete = (id) => {
    return {
        type: 'DELETE_EVENT',
        payload: id
    }
}

export default {
    Fetch, Add, Delete
}