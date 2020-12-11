import React from 'react';
import { useResetRecoilState } from 'recoil';
import './TodoList.css';

function TodoController() {
  return (
    <div>
      <button type='button'>ALL CLEAR</button>
      <button type='button'>NEW</button>
      <button type='button'>OLD</button>
    </div>
  );
}

export default TodoController;
