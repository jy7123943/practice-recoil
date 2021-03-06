import { format } from 'date-fns';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms';
import { deleteTodoItem, toggleTodoItem } from '../../controller';
import { TodoListItem } from '../../entity';
import CheckIcon from '../../img/CheckIcon';
import TodoTextEditor from './TodoTextEditor';
import './TodoItem.css';
import { saveTodoListInStorage } from '../../storage';

function TodoItem({ id, todo, is_complete, created_at }: TodoListItem) {
  const setTodoList = useSetRecoilState(todoListState);

  const onItemDelete = () => {
    setTodoList((oldTodoList) => {
      const deletedList = deleteTodoItem(oldTodoList, id);

      return saveTodoListInStorage(deletedList);
    });
  };

  const onItemToggle = () => {
    setTodoList((oldTodoList) => {
      const toggledList = toggleTodoItem(oldTodoList, id);

      return saveTodoListInStorage(toggledList);
    });
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
      <TodoTextEditor
        id={ id }
        todoText={ todo }
      />
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
