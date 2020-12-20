
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { activitySelector } from '../../selector';
import ActivityCard from './ActivityCard';

function Activity() {
  const { state } = useRecoilValueLoadable(activitySelector);

  const renderContent = () => {
    switch (state) {
      case 'hasError':
        return <div>Error</div>;
      case 'loading':
        return <div>Loading...</div>;
      case 'hasValue':
        return <ActivityCard />;
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
