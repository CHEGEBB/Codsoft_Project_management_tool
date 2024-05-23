import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import CreateProject from './pages/CreateProject';
import Progress from './pages/Progress';
import Team from './pages/Teams';
import Details from './pages/Details';
import Assign from './pages/Assign';
import Deadline from './pages/SetDeadline';

const AuthenticatedRoutes = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidenav />
      </div>
      <div className="main-app">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/project/new" element={<CreateProject />} />
          <Route path="/tasks/assign" element={<Assign />} />
          <Route path="/progress/track" element={<Progress />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/timeline/deadline" element={<Deadline />} />
          <Route path="/project/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
