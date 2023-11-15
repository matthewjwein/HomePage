import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import useGame from "./stores/useGame";

export default function Player() {
    console.log('here')
    const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const restart = useGame((state) => state.restart)
    const blocksCount = useGame((state) => state.blocksCount)

    const [subscribeKeys, getKeys] = useKeyboardControls()
    const body = useRef()
    const { rapier, world } = useRapier()
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3())
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

    const jump = () => {
        if (!body.current) {
            return
        }

        const origin = body.current.translation()
        origin.y -= 0.31
        const ray = new rapier.Ray(origin, { x: 0, y: -1, z: 0 })
        const hit = world.castRay(ray, 10, true)
        if (hit && hit.toi < 0.15) {
            body.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
        }
    }

    const reset = () => {
        if (!body.current) {
            return
        }

        body.current.setTranslation({ x: 0, y: 4, z: 0 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    useEffect(() => {
        const unsubscribePhase = useGame.subscribe(
            (state) => state.phase,
            (value) => {
                if (value === 'ready') {
                    reset()
                }
            }
        )

        const unsubscribeKeys = subscribeKeys(
            (state) => state.jump,
            (value) => {
                if (value) {
                    const phase = useGame.getState().phase
                    // Override "jump" to restart the game if the level is finished.
                    if (phase === "ended") {
                        restart()
                    } else {
                        jump()
                    }

                }
            }
        )

        const unsubscribeAny = subscribeKeys(
            (state) => state.forward || state.leftward || state.backward || state.rightward,
            (value) => {
                if (value) {
                    const phase = useGame.getState().phase
                    if (phase !== "ended") {
                        start()
                    }
                }
            })

        return () => {
            unsubscribePhase()
            unsubscribeKeys()
            unsubscribeAny()
        }
    })

    useFrame((state, delta) => {
        if (!body.current) {
            return
        }

        const { forward, backward, leftward, rightward } = getKeys()
        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrength = 0.6 * delta
        const torqueStrength = 0.2 * delta

        if (forward) {
            impulse.z = -impulseStrength
            torque.x = -torqueStrength
        }
        if (backward) {
            impulse.z = impulseStrength
            torque.x = torqueStrength
        }
        if (rightward) {
            impulse.x = impulseStrength
            torque.z = -torqueStrength
        }
        if (leftward) {
            impulse.x = -impulseStrength
            torque.z = torqueStrength
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

        const bodyPosition = body.current.translation()

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 2.25
        cameraPosition.y += 0.65

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)

        if (bodyPosition.z < - (blocksCount * 4 + 2)) {
            end()
        }

        if (bodyPosition.y < -6) {
            restart()
        }
    })

    return <RigidBody
        ref={body}
        canSleep={false}
        colliders="ball"
        position={[0, 4, 0]}
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
    >
        <mesh castShadow>
            <icosahedronGeometry args={[0.3, 1]} />
            <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
    </RigidBody>
}