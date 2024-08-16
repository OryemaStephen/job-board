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
      <div className="flex w-full min-h-screen bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D')` }}>
        <Sidebar />
        <div className="flex-grow md:w-full">
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
