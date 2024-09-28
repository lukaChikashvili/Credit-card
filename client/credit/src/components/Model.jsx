import { useGLTF } from '@react-three/drei'
import React from 'react'

const Model = () => {
   
    const model = useGLTF('./credit_card.glb');


  return (
      <>
        <primitive object={model.scene} scale = {30}/>
      </>
  )
}

export default Model
