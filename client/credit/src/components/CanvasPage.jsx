import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import Card from './Card'
import Lights from './Lights'
import { presetData } from './PresetData'
import { CardContext } from '../context/CardContext'


const CanvasPage = () => {

  const { modal } = useContext(CardContext);
  return (
   <>
     <Canvas >
      <Lights />
       <Card />
     </Canvas>

{modal ? (
  <div className='absolute top-56 right-12 z-10 flex flex-col gap-8 text-white'>
 {
   presetData.map((value) => (

     <div key={value.id} className='flex items-center gap-4'>
        <img src = {value.img} className='w-16 rounded-full h-16 cursor-pointer shadow-lg' />
        <h1>{value.name}</h1>
       </div>
   ))
 }
</div>
) : ('sfkjsf')}
 


    
   </>
  )
}

export default CanvasPage
