import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { setAllItemsComplete } from '../controller';
import './TodoController.css';

function TodoController() {
  const onAllItemsDelete = useResetRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const onAllItemsCheck = () => {
    setTodoList((oldTodoList) => setAllItemsComplete(oldTodoList));
  };

  return (
    <div className='controller'>
      <button
        type='button'
        onClick={ onAllItemsCheck }
      >
        ALL COMPLETE
      </button>
      <button
        type='button'
        onClick={ onAllItemsDelete }
      >
        ALL DELETE
      </button>
    </div>
  );
}

export default TodoController;
