import React from 'react';
import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.png';
import HomeSummary from '../components/HomeSummary';

const Dashboard = () => {
  return (
    <div className="w-full space-y-4 text-white" >
      <div className="w-full h-full bg-white text-black">
        <PageTitle text="Dashboard" showSearch={false} image={profile} />
      </div>
      <div
        className="w-full h-full bg-cover bg-center"
      >
        <HomeSummary />
      </div>
    </div>
  );
};

export default Dashboard;
