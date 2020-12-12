import { format } from 'date-fns';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { deleteTodoItem, toggleTodoItem } from '../controller';
import { TodoListItem } from '../entity';
import CheckIcon from '../img/CheckIcon';
import './TodoItem.css';

function TodoItem({ id, todo, is_complete, created_at }: TodoListItem) {
  const setTodoList = useSetRecoilState(todoListState);

  const onItemDelete = () => {
    setTodoList((oldTodoList) => deleteTodoItem(oldTodoList, id));
  };

  const onItemToggle = () => {
    setTodoList((oldTodoList) => toggleTodoItem(oldTodoList, id));
  };

  return (
    <li
      key={ id }
      className={ `${is_complete ? 'complete' : ''} todo-item` }
    >
      <label>
        <span className='icon'>
          <CheckIcon />
        </span>
        <input
          type='checkbox'
          checked={ is_complete }
          onChange={ onItemToggle }
        />
      </label>
      <div className={ 'text' }>
        { todo }
        <input
          type='text'
          defaultValue={ todo }
          className='modify-input'
        />
      </div>
      <div className='date'>
        { format(created_at, 'M.d k:m') }
      </div>
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
