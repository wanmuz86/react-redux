"use client"
import {Provider} from "react-redux"
import {store} from './store'

// We create a ReduxProviderComponent, where we will embed all the components
// that need access to the store (where all our states and actions are)
export default function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider>
}