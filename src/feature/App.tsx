import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>TO DO</h1>
      <TodoFilter />
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
