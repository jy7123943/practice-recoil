import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { setAllItemsDone, sortTodoList, SORT_TYPE } from '../controller';
import './TodoList.css';

function TodoController() {
  const onAllItemsDelete = useResetRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const onAllItemsCheck = () => {
    setTodoList((oldTodoList) => setAllItemsDone(oldTodoList));
  };

  const sortItems = (sortType: SORT_TYPE) => {
    setTodoList((oldTodoList) => sortTodoList(oldTodoList, sortType));
  };

  return (
    <div>
      <button type='button' onClick={ onAllItemsCheck }>ALL DONE</button>
      <button type='button' onClick={ onAllItemsDelete }>ALL DELETE</button>
      <button type='button' onClick={ () => sortItems(SORT_TYPE.NEW) }>NEW</button>
      <button type='button' onClick={ () => sortItems(SORT_TYPE.OLD) }>OLD</button>
    </div>
  );
}

export default TodoController;
