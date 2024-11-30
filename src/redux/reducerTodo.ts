import { createSlice } from "@reduxjs/toolkit";

interface Todo {
    text: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[]
}

const initialState: TodosState = {
    todos: []
}

const sliceTodo = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ text: action.payload, completed: false})
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload)
        },
    },
})

export const { addTodo, removeTodo } = sliceTodo.actions
export const todoReducer = sliceTodo.reducer