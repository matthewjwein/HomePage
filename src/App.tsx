import './App.css'
import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { Html, OrbitControls, useProgress } from '@react-three/drei'
import { CircularProgress } from '@mui/material'

function Loader() {
  const { progress } = useProgress();
  return <Html center><CircularProgress color="inherit" value={progress} />{progress}%</Html>;
}

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Canvas
        className="canvas"
        camera={{
          fov: 45,
          zoom: Math.min(1000, window.innerWidth * .2) / 1000,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4]
        }}
      >
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
