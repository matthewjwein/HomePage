import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Routes, Route } from "react-router-dom";
import Project1 from './components/projects/Project1/App';
import Project2 from './components/projects/Project2/App';

const projects = [
  {
    id: 1,
    dateText: 'Oct 1 - Oct 7',
    titleText: 'TicTacToe in TypeScript'
  },
  {
    id: 2,
    dateText: 'Oct 8 - Oct 14',
    titleText: 'Coming Soon'
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
