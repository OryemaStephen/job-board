// src/pages/Dashboard.js

import React from 'react';
import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.png'
import HomeSummary from '../components/HomeSummary';

const Dashboard = () => {
  return (
    <div className="w-full space-y-4">
      <div className='w-full h-full'>
        <PageTitle text="Dashboard" image={profile} />
      </div>
      <div>
        <HomeSummary />
      </div>
    </div>
  );
};

export default Dashboard;
