import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

//reducers
import user from './features/User'

const reducer = combineReducers({
    user
})

const store = configureStore({
    reducer,
})

export default store;