import { CircularProgress } from '@mui/material';
import { PresentationControls, Float, useGLTF, ContactShadows, Html } from '@react-three/drei'
import { useState } from 'react';
import Resume from './Resume';
import ResumeData from './ResumeData';

function Experience(): JSX.Element {
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => { setIsLoading(false) }, 1000)
    return (<>
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[- 0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#24bbe9'}
                    rotation={[- 0.1, Math.PI, 0]}
                    position={[0, 0.55, - 1.15]}
                />
                <primitive
                    position-y={-1}
                    object={computer.scene}
                >
                    <Html transform
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
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>)
}

export default Experience;