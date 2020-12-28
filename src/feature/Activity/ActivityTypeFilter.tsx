import React from 'react';
import { useRecoilState } from 'recoil';
import { activityTypeState } from '../../atoms';
import { Activity, ACTIVITY_TYPE } from '../../entity/activity';
import { useQuery } from 'react-query';
import type { AxiosResponse } from 'axios';

function ActivityTypeFilter() {
  const [activityType, setActivityType] = useRecoilState(activityTypeState);
  const { data } = useQuery<AxiosResponse<Activity>>(['activities', activityType]);

  return (
    <div className='filter'>
      { Object.values(ACTIVITY_TYPE).map((activityType) => (
        <button
          key={ activityType }
          type='button'
          onClick={ () => setActivityType(activityType) }
          className={ data?.data.type === activityType ? 'selected' : '' }
        >
          { activityType }
        </button>
      )) }
    </div>
  );
}

export default ActivityTypeFilter;
