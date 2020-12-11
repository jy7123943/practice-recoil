import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { TodoListItem } from '../entity';

function TodoItem({ id, todo, is_done, created_at }: TodoListItem) {
  const setTodoList = useSetRecoilState(todoListState);

  const onItemDelete = () => {
    setTodoList((oldTodoItem) => (
      oldTodoItem.filter(({ id: oldItemId }) => oldItemId !== id)
    ));
  };

  const toggleItem = () => {
    setTodoList((oldTodoItem) => (
      oldTodoItem.map((item) => (
        item.id === id
          ? { ...item, is_done: !item.is_done }
          : item
      ))
    ));
  };

  return (
    <li key={ id }>
      <label>
        <input type='checkbox' checked={ is_done } onChange={ toggleItem } />
        <span>{ todo }</span>
      </label>
      <span>{ created_at }</span>
      <button type='button' onClick={ onItemDelete }>DELETE</button>
    </li>
  );
}

export default TodoItem;
