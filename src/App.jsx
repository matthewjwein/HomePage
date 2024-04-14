import './App.css'
import { Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Game from './components/game/Game';
import Resume from './components/resume/Resume';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
