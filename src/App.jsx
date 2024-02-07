import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router';
import Resume from './components/resume/Resume';
import Game from './components/game/Game';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
