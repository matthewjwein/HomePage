import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Project from './components/Project'
import { ProjectData } from './components/ProjectData'
import ProjectList from './components/ProjectList'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectList projects={ProjectData} />} />
        <Route
          path={`/project/:id`}
          element={<Project />}
        />
      </Routes>
    </>
  );
}

export default App;
