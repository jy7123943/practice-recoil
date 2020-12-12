import React, { useState, useRef } from 'react';
import './TodoItem.css';

interface Props {
  todoText: string;
}

function TodoTextEditor({ todoText }: Props) {
  const InputElement = useRef<HTMLInputElement>(null);
  const [isEditorShown, setEditorShown] = useState(false);

  return (
    <div className={ `${isEditorShown ? 'show-editor' : ''} text-area` }>
      <input
        type='text'
        ref={ InputElement }
        defaultValue={ todoText }
        className='modify-input'
        onBlur={ () => setEditorShown(false) }
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
