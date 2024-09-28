import React from 'react'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'


const Card = () => {
  return (
  <>
  <OrbitControls makeDefault />


      <Model />
  </>
   
  )
}

export default Card
