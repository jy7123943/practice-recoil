import { format } from 'date-fns';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { deleteTodoItem, toggleTodoItem } from '../controller';
import { TodoListItem } from '../entity';
import './TodoItem.css';

function TodoItem({ id, todo, is_done, created_at }: TodoListItem) {
  const setTodoList = useSetRecoilState(todoListState);

  const onItemDelete = () => {
    setTodoList((oldTodoList) => deleteTodoItem(oldTodoList, id));
  };

  const onItemToggle = () => {
    setTodoList((oldTodoList) => toggleTodoItem(oldTodoList, id));
  };

  return (
    <li key={ id } className='todo-item'>
      <label>
        <span className='todo'>
          <input type='checkbox' checked={ is_done } onChange={ onItemToggle } />
          <span
            className={ is_done ? 'complete' : '' }
          >
            { todo }
          </span>
        </span>
        <span className='date'>
          { format(created_at, 'M.d k:m') }
        </span>
      </label>
      <button
        type='button'
        onClick={ onItemDelete }
        className='delete-button'
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
