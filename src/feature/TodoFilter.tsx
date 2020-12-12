import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms';
import { FILTER_STATE } from '../entity';
import './TodoFilter.css';

function TodoFilter() {
  const setFilter = useSetRecoilState(todoListFilterState);

  return (
    <div className='filter'>
      { Object.values(FILTER_STATE).map((filter) => (
        <button
          key={ filter }
          type='button'
          onClick={ () => setFilter(filter) }
        >
          { filter }
        </button>
      )) }
    </div>
  );
}

export default TodoFilter;
