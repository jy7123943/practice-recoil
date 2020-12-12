import React from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { todoListFilterState, todoListState } from '../atoms';
import { sortTodoList } from '../controller';
import { FILTER_STATE, SORT_STATE } from '../entity';
import { saveTodoListInStorage } from '../storage';
import './TodoFilter.css';

function TodoFilter() {
  const setFilter = useSetRecoilState(todoListFilterState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

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
      { Object.values(SORT_STATE).map((sort) => (
        <button
          key={ sort }
          type='button'
          onClick={ () => {
            const sortedList = sortTodoList(todoList, sort);

            setTodoList(sortedList);
            saveTodoListInStorage(sortedList);
          } }
        >
          { sort }
        </button>
      )) }
    </div>
  );
}

export default TodoFilter;
