import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { activityState, activityTypeState } from '../../atoms';
import { ACTIVITY_TYPE } from '../../entity/activity';

function ActivityTypeFilter() {
  const setActivityType = useSetRecoilState(activityTypeState);
  const { type } = useRecoilValue(activityState);

  return (
    <div className='filter'>
      { Object.values(ACTIVITY_TYPE).map((activityType) => (
        <button
          key={ activityType }
          type='button'
          onClick={ () => setActivityType(activityType) }
          className={ type === activityType ? 'selected' : '' }
        >
          { activityType }
        </button>
      )) }
    </div>
  );
}

export default ActivityTypeFilter;
