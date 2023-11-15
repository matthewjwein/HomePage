import './Resume.css'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Html, useProgress } from '@react-three/drei'
import { CircularProgress } from '@mui/material'

function Loader() {
    const { progress } = useProgress();
    return <Html center><CircularProgress color="inherit" value={progress} />{progress}%</Html>;
}

function App() {
    return (
        <Canvas
            className="canvas"
            camera={{
                fov: 45,
                zoom: Math.min(1000, window.innerWidth) / 1000,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4]
            }}
        >
            <Suspense fallback={<Loader />}>
                <Experience />
            </Suspense>
        </Canvas>
    );
}

export default App;