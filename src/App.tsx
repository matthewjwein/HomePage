import './App.css'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import * as THREE from 'three'
import gsap from 'gsap'
import { render } from '@testing-library/react'

function App(): JSX.Element {

  useEffect(() => {
    THREE.ColorManagement.enabled = false

    const parameters = {
      materialColor: '#0e6ffd',
    }

    /**
     * Base
     */
    // Canvas
    const canvas = document.querySelector('canvas.webgl')
    if (!canvas) return

    // Scene
    const scene = new THREE.Scene()

    /**
     * Objects
     */
    // Texture
    const textureLoader = new THREE.TextureLoader()
    const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
    gradientTexture.magFilter = THREE.NearestFilter

    // Material
    const material = new THREE.MeshToonMaterial({
      color: parameters.materialColor,
      gradientMap: gradientTexture
    })

    const geometry = new THREE.TorusKnotGeometry(1, 0.2, 256, 8, 4)

    // Objects
    const mesh = new THREE.Mesh(
      geometry,
      material
    )

    scene.add(mesh)

    /**
     * Lights
     */
    const directionalLight = new THREE.DirectionalLight('#ffffff', 2.5)
    directionalLight.position.set(1, 1, 0)
    scene.add(directionalLight)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Group
    const cameraGroup = new THREE.Group()
    scene.add(cameraGroup)

    // Base camera
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    cameraGroup.add(camera)

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    })
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    renderer.setClearAlpha(0.65)
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Scroll
     */
    let scrollY = window.scrollY
    let currentSection = 0

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY
      const newSection = Math.round(scrollY / sizes.height)

      if (newSection !== currentSection) {
        currentSection = newSection

        gsap.to(
          mesh.rotation,
          {
            duration: 1.5,
            ease: 'power2.inOut',
            x: '+=6',
            y: '+=3',
            z: '+=1.5'
          }
        )
      }
    })

    /**
     * Cursor
     */
    const cursor = {
      x: 0,
      y: 0,
    }

    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / sizes.width - 0.5
      cursor.y = event.clientY / sizes.height - 0.5
    })

    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      const deltaTime = elapsedTime - previousTime
      previousTime = elapsedTime

      // Animate camera
      camera.position.y = - scrollY / sizes.height

      const parallaxX = cursor.x * 0.5
      const parallaxY = - cursor.y * 0.5
      cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * deltaTime
      cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * deltaTime

      // Animate mesh
      mesh.rotation.x += deltaTime * 0.05
      mesh.rotation.y += deltaTime * 0.2

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  })

  return (
    <div className="app">
      <Navbar />
      <div className="project-wrapper">
        <canvas className="webgl"></canvas>
      </div>
    </div>
  );
}

export default App;
