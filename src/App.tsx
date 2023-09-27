import './App.css';
import React from 'react'
import ProjectList from './components/ProjectList'
import Project from './components/Project'
import { Routes, Route } from "react-router-dom";

const projects = [
  {
    title: 'Sep 24 - Sep 30: Portfolio Website',
    tags: ['React'],
  },
  {
    title: 'Oct 1 - Oct 7: Simple Game',
    tags: ['React'],
  },
  {
    title: 'Oct 8 - Oct 14: Multiplayer Game',
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
        <Route path="/" element={<div>Click on a project to try it out</div>} />
        {projects.map((project, index) => (
          <Route path={`/project/${index + 1}`} element={<Project title={project.title} tags={project.tags} />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
