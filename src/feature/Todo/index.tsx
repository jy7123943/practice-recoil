import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

function Todo() {
  return (
    <div className="container">
      <h1>TO DO</h1>
      <TodoFilter />
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default Todo;
