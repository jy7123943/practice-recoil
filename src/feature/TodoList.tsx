import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atoms';
import TodoController from './TodoController';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  if (todoList.length === 0) {
    return <div>Empty List</div>;
  }

  return (
    <div>
      <TodoController />
      <ul className="todo-list">
        {
          todoList.map((item) => (
            <TodoItem
              key={ item.id }
              { ...item }
            />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
