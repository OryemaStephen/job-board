import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SearchJob from '../pages/SearchJob';
import Sidebar from '../components/Sidebar';
import About from '../pages/About';
import JobDetails from '../components/JobDetails';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex w-full min-h-screen ">
        <Sidebar />
        <div className="flex-grow p-4 md:w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/searchjobs" element={<SearchJob />} />
            <Route path="/searchjobs/:id" element={<JobDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
