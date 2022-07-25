import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: ["снять видео", "смонтировать видео", "рассказать про toolkit"]
}

export const fetchCustomers = () => {
    return function(dispatch) {
        fetch('http://localhost:3001')
            .then(response => response.json())
            .then(json => dispatch(increment(json)))
    }
}

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

export default createReducer(initialState, {
    [increment]: function (state) {
        state.count = state.count + 1
    },
    [decrement]: function (state) {
        state.count = state.count = 1
    }
})