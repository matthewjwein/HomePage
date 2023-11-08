import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Canvas
        className="canvas"
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4]
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
