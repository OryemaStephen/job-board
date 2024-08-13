import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SearchJob from '../pages/SearchJob';
import Profile from '../pages/Profile';
import Sidebar from '../components/Sidebar';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow w-full p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/searchjobs" element={<SearchJob />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
