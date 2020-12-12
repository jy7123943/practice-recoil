import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState, todoSortState } from '../atoms';
import { FILTER_STATE, SORT_STATE } from '../entity';
import { saveFilterStateInStorage, saveSortStateInStorage } from '../storage';
import './TodoFilter.css';

function TodoFilter() {
  const [currentFilter, setFilter] = useRecoilState(todoListFilterState);
  const [currentSortState, setSortState] = useRecoilState(todoSortState);

  return (
    <div className='filter'>
      { Object.values(FILTER_STATE).map((filter) => (
        <button
          key={ filter }
          type='button'
          onClick={ () => {
            saveFilterStateInStorage(filter);
            setFilter(filter);
          } }
          className={ currentFilter === filter ? 'selected' : '' }
        >
          { filter }
        </button>
      )) }
      <div>
        { Object.values(SORT_STATE).map((sort) => (
          <button
            key={ sort }
            type='button'
            onClick={ () => {
              saveSortStateInStorage(sort);
              setSortState(sort);
            } }
            className={ currentSortState === sort ? 'selected' : '' }
          >
            { sort }
          </button>
        )) }
      </div>
    </div>
  );
}

export default TodoFilter;
