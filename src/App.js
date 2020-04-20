import React from 'react';
import './App.css';
import AddTodoContainer from './components/AddTodoContainer/index';
import VisibleTodoList from './components/VisibleTodoList/index';
import FilterPanel from './components/FilterPanel/FilterPanel'

import { createStore } from 'redux';
import todoAppReducer from './redux/todoReducer';
let store = createStore(todoAppReducer);
store.subscribe(() => console.log(store.getState()))

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="header">todos</h1>
      <AddTodoContainer />
      <FilterPanel 
        className="filter-panel"
      />
      <VisibleTodoList />
    </div>
  );
}

export default App;
