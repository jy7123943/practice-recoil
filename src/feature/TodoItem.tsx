import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { TodoListItem } from '../entity';

function TodoItem({ id, todo, is_done, created_at }: TodoListItem) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <li key={ id }>
      <label>
        <input type='checkbox' defaultChecked={ is_done } />
        <span>{ todo }</span>
      </label>
      <span>{ created_at }</span>
      <button type='button'>DELETE</button>
    </li>
  );
}

export default TodoItem;
