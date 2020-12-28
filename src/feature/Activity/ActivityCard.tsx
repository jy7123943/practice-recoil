
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { activityTypeState, todoListState } from '../../atoms';
import type { TodoListItem } from '../../entity';
import { saveTodoListInStorage } from '../../storage';
import './ActivityCard.css';
import { QueryObserverResult, useQuery } from 'react-query';
import { Activity } from '../../entity/activity';

function ActivityCard() {
  const setTodoList = useSetRecoilState(todoListState);
  const activityType = useRecoilValue(activityTypeState);
  const {
    data,
    refetch,
  } = useQuery<QueryObserverResult<Activity>>(['activities', activityType]);

  const onAddButtonClick = () => {
    setTodoList((oldTodoList: TodoListItem[]) => {
      const newTodoList = [
        {
          id: `id-${oldTodoList.length}`,
          todo: data?.data?.activity || '',
          is_complete: false,
          created_at: new Date().getTime(),
        },
        ...oldTodoList,
      ];

      saveTodoListInStorage(newTodoList);

      return newTodoList;
    });

    refetch();
  };

  return (
    <>
      <section className='card-container'>
        <h2>
          { data?.data?.activity }
          <span className='badge'>{ data?.data?.type }</span>
        </h2>
        <ul>
          <li>COST: { data?.data?.price }$</li>
          <li>PARTICIPANTS: { data?.data?.participants }</li>
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
