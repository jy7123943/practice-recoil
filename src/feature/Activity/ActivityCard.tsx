
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { refreshActivityState, todoListState } from '../../atoms';
import { activitySelector } from '../../selector';
import type { TodoListItem } from '../../entity';
import { saveTodoListInStorage } from '../../storage';
import './ActivityCard.css';

function ActivityCard() {
  const {
    activity,
    price,
    participants,
    type,
  } = useRecoilValue(activitySelector);
  const setTodoList = useSetRecoilState(todoListState);
  const setRefreshActivityState = useSetRecoilState(refreshActivityState);
  const refreshActivity = () => setRefreshActivityState(n => n + 1);

  const onAddButtonClick = () => {
    setTodoList((oldTodoList: TodoListItem[]) => {
      const newTodoList = [
        {
          id: `id-${oldTodoList.length}`,
          todo: activity,
          is_complete: false,
          created_at: new Date().getTime(),
        },
        ...oldTodoList,
      ];

      saveTodoListInStorage(newTodoList);

      return newTodoList;
    });

    refreshActivity();
  };

  return (
    <>
      <section className='card-container'>
        <h2>
          { activity }
          <span className='badge'>{ type }</span>
        </h2>
        <ul>
          <li>COST: { price }$</li>
          <li>PARTICIPANTS: { participants }</li>
        </ul>
        <button
          type='button'
          className='add-button'
          onClick={ onAddButtonClick }
        >
          ADD TODO
        </button>
      </section>
      <div className='input-container'>
        <Link to='/' className='bottom-button'>
          MOVE TO TODO
        </Link>
      </div>
    </>
  );
}

export default ActivityCard;
