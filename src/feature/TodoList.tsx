import React from 'react';

function TodoList() {
  return (
    <div>
      <button type='button'>NEW</button>
      <button type='button'>OLD</button>
      <ul className="todo-list">
        <li>
          <label>
            <input type='checkbox' />
            <span>장보기</span>
          </label>
          <span>2020.10.01 12:00pm</span>
          <button type='button'>DELETE</button>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            <span>공부하기</span>
          </label>
          <span>2020.10.02 12:00am</span>
          <button type='button'>DELETE</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
