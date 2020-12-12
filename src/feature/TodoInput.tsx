import React, { ChangeEvent } from 'react';
import type { KeyboardEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState, todoTextState } from '../atoms';
import type { TodoListItem } from './../entity';
import './TodoInput.css';
import { saveTodoListInStorage } from '../storage';

function TodoInput() {
  const [todoText, setTodoText] = useRecoilState(todoTextState);
  const setTodoList = useSetRecoilState(todoListState);

  const saveTodoItem = () => {
    if (!todoText) {
      return;
    }

    setTodoList((oldTodoList: TodoListItem[]) => {
      const newTodoList = [
        {
          id: `id-${oldTodoList.length}`,
          todo: todoText,
          is_complete: false,
          created_at: new Date().getTime(),
        },
        ...oldTodoList,
      ];

      saveTodoListInStorage(newTodoList);

      return newTodoList;
    });

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
    <div className="input-container">
      <div></div>
      <input
        type='text'
        value={ todoText }
        onChange={ onTodoTextChange }
        onKeyPress={ onEnterPress }
        className='todo-input'
      />
      <button
        type='button'
        onClick={ saveTodoItem }
        className='save-button'
      >
        SAVE
      </button>
    </div>
  );
}

export default TodoInput;
