import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Routes, Route } from "react-router-dom";
import Project1 from './components/projects/1/app';
import Project2 from './components/projects/2/app';

const projects = [
  {
    id: 1,
    title: 'Oct 1 - Oct 7'
  },
  {
    id: 2,
    title: 'Oct 8 - Oct 14'
  },
];

function App(): JSX.Element {
  return (
    <div className="app">
      <Navbar />
      <div className="project-wrapper">
        <Routes>
          <Route path="/" element={<Homepage projects={projects} />} />
          <Route path="/project/1" element={<Project1 />} />
          <Route path="/project/2" element={<Project2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
