import {createSlice} from '@reduxjs/toolkit';
// createSlice method from the toolkit is a way to define our redux configuration
// Where we define  the name of the slice (configurate)
// the state as well as it initialValue = initialState
// reducers => methods that being called on the variable/ state
const todoSlice = createSlice({
    name:'todos',
    initialState: {todos:[]},
    reducers: {
        // action => Method being called by the component
        // payload => what component pass to method/reducer

        addTodo: (state,action) =>{
            [...state.todos, action.payload]
        },
        removeTodo:(state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
         
        }
    }
})


// we export all the method that's going to be used inside the components.
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer;