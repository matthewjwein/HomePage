import './GameMobile.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Interface from './Interface'
import { Joystick } from 'react-joystick-component'
import useGame from './stores/useGame'

const Game2D = () => {
    const setJoystickDirection = useGame((state) => state.setJoystickDirection)
    const setJumpFlag = useGame((state) => state.setJumpFlag)

    const handleMove = (event) => {
        setJoystickDirection(event.direction)
    };

    const handleStop = () => {
        setJoystickDirection("NONE")
    };

    const handleClick = () => {
        setJumpFlag(true)
    }

    return <>
        <div className="controls">
            <Joystick
                size={100}
                baseColor="white"
                stickColor="mediumpurple"
                move={handleMove}
                stop={handleStop}
            />
        </div>
        <Suspense>
            <Canvas
                onClick={handleClick}
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6]
                }}
            >
                <Experience />
            </Canvas>
        </Suspense>
        <Interface />
    </>
}

export default Game2D; 