import {configureStore} from '@reduxjs/toolkit'
import {todoReducer} from './features/todoSlice'

// Code to create the store that later going to be used by the component to call the action
// from the store

export const store = configureStore({
    // this is where you can list down all the reducer [if you have more than one reducer]
    reducer: {
        todos:todoReducer
    }
    // If your store have other configuration , if you want to intercept all change on the state
    // you can define it here using middleware
})