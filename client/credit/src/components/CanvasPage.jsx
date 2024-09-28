import React from 'react'
import { Canvas } from '@react-three/fiber'
import Card from './Card'
import Lights from './Lights'

const CanvasPage = () => {
  return (
   <>
     <Canvas >
      <Lights />
       <Card />
     </Canvas>
   </>
  )
}

export default CanvasPage
