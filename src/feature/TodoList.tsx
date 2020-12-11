import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atoms';

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
          todoList.map(({ id, todo, is_done, created_at }) => (
            <li key={ id }>
              <label>
                <input type='checkbox' defaultChecked={ is_done } />
                <span>{ todo }</span>
              </label>
              <span>{ created_at }</span>
              <button type='button'>DELETE</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
