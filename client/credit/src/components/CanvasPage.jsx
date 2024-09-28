import React from 'react'
import { Canvas } from '@react-three/fiber'

const CanvasPage = () => {
  return (
   <>
     <Canvas>
        <mesh>
            <boxGeometry />
        </mesh>
     </Canvas>
   </>
  )
}

export default CanvasPage
