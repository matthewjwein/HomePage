import { CircularProgress } from '@mui/material';
import { Float, useGLTF, ContactShadows, Html } from '@react-three/drei'
import { useRef, useState } from 'react';
import Resume from './Resume';
import ResumeData from './ResumeData';

function Experience(): JSX.Element {
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")

    const [isLoading, setIsLoading] = useState(true)

    const laptop = useRef(null)

    setTimeout(() => { setIsLoading(false) }, 1000)
    return (<>
        <Float rotationIntensity={0.4}>
            <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={65}
                color={'#24bbe9'}
                rotation={[- 0.1, Math.PI, 0]}
                position={[0, 0.55, - 1.15]}
            />
            <primitive ref={laptop}
                position-y={-1}
                object={computer.scene}
            >
                <Html
                    occlude={[laptop]}
                    transform
                    wrapperClass='resume'
                    distanceFactor={1.17}
                    position={[0, 1.56, -1.4]}
                    rotation-x={-0.256}
                >
                    <div className="resume-wrapper">
                        {isLoading ?
                            <div style={{ display: 'flex', marginTop: '300px', justifyContent: 'center' }}>
                                <CircularProgress className="resume-progress-loader" color="inherit" />
                            </div>
                            :
                            <Resume {...ResumeData} />
                        }
                    </div>
                </Html>
            </primitive>
        </Float>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>)
}

export default Experience;