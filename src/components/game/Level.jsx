import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' })
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered' })
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })

export function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <mesh
            geometry={boxGeometry}
            material={floor1Material}
            position={[0, -0.1, 0]}
            scale={[4, 0.2, 4]}
            receiveShadow
        />
    </group >
}

export function BlockLimbo({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => (Math.random() * Math.PI * 2))

    useFrame((state) => {
        if (obstacle.current) {
            const time = state.clock.elapsedTime
            const offsetY = Math.sin(time + timeOffset) + 1.15
            obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + offsetY, z: position[2] })
        }
    })

    return <group position={position}>
        <mesh
            geometry={boxGeometry}
            material={floor2Material}
            position={[0, -0.1, 0]}
            scale={[4, 0.2, 4]}
            receiveShadow
        />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <mesh
                geometry={boxGeometry}
                material={obstacleMaterial}
                scale={[3.5, 0.3, 0.3]}
                receiveShadow
                castShadow
            />
        </RigidBody>
    </group >
}

export function BlockSpinner({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [obstacleSpeed] = useState(() => (Math.random() + 0.2) * Math.random() < 0.5 ? -1 : 1)

    useFrame((state) => {
        if (obstacle.current) {
            const time = state.clock.elapsedTime

            const rotation = new THREE.Quaternion()
            rotation.setFromEuler(new THREE.Euler(0, time * obstacleSpeed, 0))
            obstacle.current.setNextKinematicRotation(rotation)
        }
    })

    return <group position={position}>
        <mesh
            geometry={boxGeometry}
            material={floor2Material}
            position={[0, -0.1, 0]}
            scale={[4, 0.2, 4]}
            receiveShadow
        />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <mesh
                geometry={boxGeometry}
                material={obstacleMaterial}
                scale={[3.5, 0.3, 0.3]}
                receiveShadow
                castShadow
            />
        </RigidBody>
    </group >
}

export function BlockAxe({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => (Math.random() * Math.PI * 2))

    useFrame((state) => {
        if (obstacle.current) {
            const time = state.clock.elapsedTime
            const offsetX = Math.sin(time + timeOffset) * 1.25
            obstacle.current.setNextKinematicTranslation({ x: position[0] + offsetX, y: position[1] + 0.75, z: position[2] })
        }
    })

    return <group position={position}>
        <mesh
            geometry={boxGeometry}
            material={floor2Material}
            position={[0, -0.1, 0]}
            scale={[4, 0.2, 4]}
            receiveShadow
        />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <mesh
                geometry={boxGeometry}
                material={obstacleMaterial}
                scale={[1.5, 1.5, 0.3]}
                receiveShadow
                castShadow
            />
        </RigidBody>
    </group >
}

export function BlockEnd({ position = [0, 0, 0] }) {
    const model = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/young-korrigan/model.gltf")
    let mixer
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        mixer.clipAction(model.animations[1]).play()
    }

    model.scene.traverse(function (node) {
        if (node.isMesh) { node.castShadow = true; }
    });

    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    return <group position={position}>
        <mesh
            geometry={boxGeometry}
            material={floor1Material}
            position={[0, -0.1, 0]}
            scale={[4, 0.2, 4]}
            receiveShadow
        />
        <RigidBody type="fixed" colliders="hull" position={[0, 0, 0]} restitution={0.2} friction={0}>
            <primitive object={model.scene} scale={5} />
        </RigidBody>
    </group >
}

function Bounds({ length = 1 }) {
    return <RigidBody type="fixed" restitution={0.2} friction={0}>
        <mesh
            position={[2.15, 0.55, - (length * 2) + 2]}
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[0.3, 1.5, length * 4]}
            castShadow
        />
        <mesh
            position={[-2.15, 0.55, - (length * 2) + 2]}
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[0.3, 1.5, length * 4]}
            receiveShadow
        />
        <mesh
            position={[0, 0.55, - (length * 4) + 2]}
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[4, 1.5, 0.3]}
            receiveShadow
        />
        <CuboidCollider
            args={[2, 0.1, 2 * length]}
            position={[0, -0.1, - (length * 2) + 2]}
            restitution={0.2} friction={1}
        />
    </RigidBody>
}

export default function Level({ count = 5, types = [BlockSpinner, BlockAxe, BlockLimbo], seed = 0 }) {
    const blocks = useMemo(() => {
        console.log("updating blocks with seed", seed)
        const blocks = []
        for (let i = 0; i < count; i++) {
            blocks.push(types[Math.floor(Math.random() * types.length)])
        }
        return blocks
    }, [count, types, seed])

    return <>
        <BlockStart position={[0, 0, 0]} />
        {blocks.map((Block, index) => <Block key={index} position={[0, 0, -(index + 1) * 4]} />)}
        <BlockEnd position={[0, 0, -(blocks.length + 1) * 4]} />

        <Bounds length={count + 2} />
    </>
} 