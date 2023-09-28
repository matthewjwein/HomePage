import './App.css';
import React from 'react'
import ProjectList from './components/ProjectList';
import { Routes, Route } from "react-router-dom";
import Project1 from './components/projects/1/app';
import Project2 from './components/projects/2/app';

const projects = [
  {
    id: 1,
    title: 'Oct 1 - Oct 7',
    tags: ['React'],
  },
  {
    id: 2,
    title: 'Oct 8 - Oct 14',
    tags: ['React'],
  },
];

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Introduction">
          Hi. I'm developing a project a week, starting with this website to showcase these projects.
        </p>
        <ProjectList projects={projects} />
      </header>
      <Routes>
        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<Project2 />} />
      </Routes>
    </div>
  );
}

export default App;
