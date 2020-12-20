
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { activitySelector } from '../../selector';
import ActivityCard from './ActivityCard';
import ActivityTypeFilter from './ActivityTypeFilter';
import './index.css';

function Activity() {
  const { state } = useRecoilValueLoadable(activitySelector);

  const renderContent = () => {
    switch (state) {
      case 'hasError':
        return <p>Error</p>;
      case 'loading':
        return <p>Loading...</p>;
      case 'hasValue':
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
