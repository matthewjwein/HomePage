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
        {ProjectData.map((project) => {
          return <Route
            key={project.id}
            path={`/project/${project.id}`}
            element={<Project
              title={project.titleText}
              component={project.component}
            />}
          />
        })}
      </Routes>
    </>
  );
}

export default App;
