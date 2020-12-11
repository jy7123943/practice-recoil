import React, { useRef } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import './TodoList.css';

function TodoController() {
  const deleteAllItems = useResetRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const setAllItemsDone = () => {
    setTodoList((oldTodoList) => oldTodoList.map((item) => ({
      ...item,
      is_done: true
    })));
  };

  return (
    <div>
      <button type='button' onClick={ setAllItemsDone }>ALL DONE</button>
      <button type='button' onClick={ deleteAllItems }>ALL DELETE</button>
      <button type='button'>NEW</button>
      <button type='button'>OLD</button>
    </div>
  );
}

export default TodoController;
