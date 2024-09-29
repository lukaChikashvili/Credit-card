import { Environment, useGLTF, useTexture } from '@react-three/drei'
import React, { useContext, useEffect, useRef } from 'react'
import red from '../assets/red.jpg';
import { MeshPhysicalMaterial } from 'three';
import { CardContext } from '../context/CardContext';


const Model = () => {
   
    const model = useGLTF('./credit_card.glb');

    let card = useRef();

    const { preset, design } = useContext(CardContext);


    // credit card texture
    const texture = useTexture(design);
     
    useEffect(() => {
     

        if(card.current) {
            card.current.traverse((child) => {
                if(child.isMesh) {
                    const newMaterial = new MeshPhysicalMaterial({
                        map: texture,
                        ior: 1,
                        metalness: 5,
                        reflectivity: 0.9,
                        iridescenceIOR: 0.5,
                        sheen: 0.8,
                        clearcoat: 1,
                        flatShading: true,
                        
                       
                    });
                    child.material = newMaterial;
                    child.material.needsUpdate = true;
                    child.material.metalness = 0.02;
                   

                }
            })
        }
    }, [texture])
  return (
      <>
     <Environment preset={preset}  files="./hdr.jpg" background />

        <primitive object={model.scene} scale = {50} ref = {card} />
      </>
  )
}

export default Model
