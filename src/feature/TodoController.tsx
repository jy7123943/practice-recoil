import React, { useRef } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { TodoListItem } from '../entity';
import './TodoList.css';

enum SORT_TYPE {
  NEW = 'new',
  OLD = 'old',
}

const sortTodoList = (list: TodoListItem[], sortType: SORT_TYPE) => (
  [...list].sort((left, right) => (
    sortType === SORT_TYPE.NEW
      ? right.created_at - left.created_at
      : left.created_at - right.created_at
  ))
);

function TodoController() {
  const deleteAllItems = useResetRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const setAllItemsDone = () => {
    setTodoList((oldTodoList) => oldTodoList.map((item) => ({
      ...item,
      is_done: true
    })));
  };

  const sortItems = (sortType: SORT_TYPE) => {
    setTodoList((oldTodoList) => sortTodoList(oldTodoList, sortType));
  };

  return (
    <div>
      <button type='button' onClick={ setAllItemsDone }>ALL DONE</button>
      <button type='button' onClick={ deleteAllItems }>ALL DELETE</button>
      <button type='button' onClick={ () => sortItems(SORT_TYPE.NEW) }>NEW</button>
      <button type='button' onClick={ () => sortItems(SORT_TYPE.OLD) }>OLD</button>
    </div>
  );
}

export default TodoController;
