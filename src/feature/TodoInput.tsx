import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { todoTextState } from '../atoms';

function TodoInput() {
  const [todoText, setTodoText] = useRecoilState(todoTextState);

  const onTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  return (
    <div className="todo-input">
      <input type='text' value={ todoText } onChange={ onTodoTextChange } />
      <button type='button'>SAVE</button>
    </div>
  );
}

export default TodoInput;
