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
    <li key={ id }>
      <label>
        <input type='checkbox' checked={ is_done } onChange={ onItemToggle } />
        <span className={ is_done ? 'complete' : '' }>{ todo }</span>
      </label>
      <span>{ created_at }</span>
      <button type='button' onClick={ onItemDelete }>DELETE</button>
    </li>
  );
}

export default TodoItem;
