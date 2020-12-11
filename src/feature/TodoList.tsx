import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atoms';
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  if (todoList.length === 0) {
    return <div>Empty List</div>;
  }

  return (
    <div>
      <button type='button'>NEW</button>
      <button type='button'>OLD</button>
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
