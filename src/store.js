import { createStore } from 'redux'
import events from './reducers/events'

const store = createStore(events)

export default store
