import React from 'react';
import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.png';
import HomeSummary from '../components/HomeSummary';

const Dashboard = () => {
  return (
    <div className="w-full space-y-4 text-white" >
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="Dashboard" showSearch={false} image={profile} />
      </div>
      <div
        className="w-full h-full bg-center bg-cover"
      >
        <HomeSummary />
      </div>
    </div>
  );
};

export default Dashboard;
