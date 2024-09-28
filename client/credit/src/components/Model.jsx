import { Environment, useGLTF, useTexture } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import red from '../assets/red.jpg';
import { MeshPhysicalMaterial } from 'three';


const Model = () => {
   
    const model = useGLTF('./credit_card.glb');

    let card = useRef();

    // credit card texture
    const texture = useTexture(red);
     
    useEffect(() => {
     

        if(card.current) {
            card.current.traverse((child) => {
                if(child.isMesh) {
                    const newMaterial = new MeshPhysicalMaterial({
                        map: texture,
                        ior: 2,
                        metalness: 0.4,
                        reflectivity: 0.9,
                        iridescenceIOR: 0.5,
                        sheen: 0.8,
                        clearcoat: 1,
                        flatShading: true,
                        
                       
                    });
                    child.material = newMaterial;
                    child.material.needsUpdate = true;
                    child.material.metalness = 0.02;
                    console.log(child.material)

                }
            })
        }
    }, [texture])
  return (
      <>
     <Environment preset='city' />

        <primitive object={model.scene} scale = {50} ref = {card} />
      </>
  )
}

export default Model
