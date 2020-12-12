import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../atoms';
import TodoController from './TodoController';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  if (todoList.length === 0) {
    return <div className='empty'>Empty List!</div>;
  }

  return (
    <>
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
    </>
  );
}

export default TodoList;
