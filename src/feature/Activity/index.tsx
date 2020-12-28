
import React from 'react';
import { useRecoilValue } from 'recoil';
import ActivityCard from './ActivityCard';
import ActivityTypeFilter from './ActivityTypeFilter';
import './index.css';
import { useQuery } from 'react-query';
import { fetchActivity } from '../../api';
import { activityTypeState } from '../../atoms';
import { AxiosResponse } from 'axios';
import type { Activity as ActivityType } from '../../entity/activity';

function Activity() {
  const activityType = useRecoilValue(activityTypeState);
  const { status } = useQuery<AxiosResponse<ActivityType>>(
    ['activities', activityType],
    () => fetchActivity(activityType),
  );

  const renderContent = () => {
    switch (status) {
      case 'error':
        return <p>Error</p>;
      case 'loading':
        return <p>Loading...</p>;
      case 'success':
        return (
          <>
            <ActivityTypeFilter />
            <ActivityCard />
          </>
        );
    }
  };

  return (
    <div className='container'>
      <h1>ACTIVITY</h1>
      { renderContent() }
    </div>
  );
}

export default Activity;
