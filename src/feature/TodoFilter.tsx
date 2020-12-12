import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms';
import { FILTER_STATE } from '../entity';
import './TodoFilter.css';

function TodoFilter() {
  const setFilter = useSetRecoilState(todoListFilterState);

  return (
    <div className='filter'>
      <button
        type='button'
        onClick={ () => setFilter(FILTER_STATE.DEFAULT) }
      >
        DEFAULT
      </button>
      <button
        type='button'
        onClick={ () => setFilter(FILTER_STATE.NEW) }
      >
        NEW
      </button>
      <button
        type='button'
        onClick={ () => setFilter(FILTER_STATE.OLD) }
      >
        OLD
      </button>
    </div>
  );
}

export default TodoFilter;
