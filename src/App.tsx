import './App.css'
import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { Html, useProgress } from '@react-three/drei'

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}


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
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
