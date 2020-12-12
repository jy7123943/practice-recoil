import React, { useState, useRef } from 'react';
import type { FocusEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms';
import './TodoItem.css';
import { mapEditedItem, sortTodoList } from '../../controller';
import { SORT_STATE } from '../../entity';

interface Props {
  id: string;
  todoText: string;
}

function TodoTextEditor({ id, todoText }: Props) {
  const InputElement = useRef<HTMLInputElement>(null);
  const [isEditorShown, setEditorShown] = useState(false);
  const setTodoList = useSetRecoilState(todoListState);

  const saveEditedTodo = (event: FocusEvent<HTMLInputElement>) => {
    setEditorShown(false);

    if (todoText === event.target.value) {
      return;
    }

    setTodoList((oldTodoList) => {
      const updatedList = mapEditedItem(oldTodoList, id, {
        todo: event.target.value,
        created_at: new Date().getTime(),
      });

      return sortTodoList(updatedList, SORT_STATE.NEW);
    });
  };

  return (
    <div className={ `${isEditorShown ? 'show-editor' : ''} text-area` }>
      <input
        type='text'
        ref={ InputElement }
        defaultValue={ todoText }
        className='modify-input'
        onBlur={ saveEditedTodo }
      />
      <span
        className='text'
        onClick={ () => {
          const { current } = InputElement;
          current && current.focus();
          setEditorShown(true);
        } }
      >
        { todoText }
      </span>
    </div>
  );
}

export default TodoTextEditor;
