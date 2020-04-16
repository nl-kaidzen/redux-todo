import React, { useState } from 'react';
import './App.css';
import AddInput from './components/AddInput/AddInput';
import TodoList from './components/TodoList/TodoList';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from './redux/actionCreators';
import { VisibilityFilters } from './redux/actionTypes';
import { createStore } from 'redux';
import todoAppReducer from './redux/todoReducer';
let store = createStore(todoAppReducer);

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Отправим несколько экшенов
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Прекратим слушать обновление состояния
unsubscribe()

function App() {
  const [inputValue, setInputValue] = useState();
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }
  return (
    <div className="app-wrapper">
      <h1 className="header">todos</h1>
      <AddInput 
        value={inputValue}
        handleChange={handleChange}
      />
      <TodoList />
    </div>
  );
}

export default App;
