import React, { ChangeEvent } from 'react';
import type { KeyboardEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState, todoTextState } from '../atoms';
import type { TodoListItem } from './../entity';

function TodoInput() {
  const [todoText, setTodoText] = useRecoilState(todoTextState);
  const setTodoList = useSetRecoilState(todoListState);

  const saveTodoItem = () => {
    if (!todoText) {
      return;
    }

    setTodoList((oldTodoList: TodoListItem[]) => ([
      {
        id: `id-${oldTodoList.length}`,
        todo: todoText,
        is_done: false,
        created_at: new Date().getTime(),
      },
      ...oldTodoList,
    ]));

    setTodoText('');
  };

  const onEnterPress = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      saveTodoItem();
    }
  };

  const onTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  return (
    <div className="todo-input">
      <input
        type='text'
        value={ todoText }
        onChange={ onTodoTextChange }
        onKeyPress={ onEnterPress }
      />
      <button type='button' onClick={ saveTodoItem }>SAVE</button>
    </div>
  );
}

export default TodoInput;
