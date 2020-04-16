import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';
let nextIdNumber = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextIdNumber++,
    text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
