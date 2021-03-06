import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms';
import { setAllItemsCompleted } from '../../controller';
import { saveTodoListInStorage } from '../../storage';
import './TodoController.css';

function TodoController() {
  const setTodoList = useSetRecoilState(todoListState);

  const onAllItemsCheck = () => {
    setTodoList((oldTodoList) => {
      const completedList = setAllItemsCompleted(oldTodoList);

      return saveTodoListInStorage(completedList);
    });
  };
  const onAllItemsDelete = () => {
    setTodoList([]);
    saveTodoListInStorage([]);
  };

  return (
    <div className='controller'>
      <button
        type='button'
        onClick={ onAllItemsCheck }
      >
        ALL
      </button>
      <button
        type='button'
        onClick={ onAllItemsDelete }
      >
        CLEAR ALL
      </button>
    </div>
  );
}

export default TodoController;
