import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import Card from './Card'
import Lights from './Lights'
import { presetData } from './PresetData'
import { CardContext } from '../context/CardContext'
import { patternData } from './patternData'


const CanvasPage = () => {

  const { modal,  setPreset, backModal, setDesign } = useContext(CardContext);

 // change preset function
  const changePreset = (name) => {
      setPreset(name);

    
  }

  // change card background function

  const changeDesign = (img) => {
    setDesign(img);
  }

  return (
   <>
     <Canvas >
      <Lights />
       <Card />
     </Canvas>

{modal ? (
  <div className='absolute top-36 right-4 z-10 flex flex-col gap-4 bg-white p-4 rounded-lg '>
 {
   presetData.map((value) => (

     <div key={value.id} className='flex items-center gap-4'>
        <img src = {value.img} className='w-12 rounded-full border-2 h-12 cursor-pointer shadow-lg duration-500 ease hover:border-green-500 shadow-gray-500' onClick={() => changePreset(value.name)} />
        <h1>{value.name}</h1>
       </div>
   ))
 }
</div>
) : ''}


 {backModal && <div className='absolute top-36 right-8 z-10 grid grid-cols-4 gap-8 bg-white p-6 rounded-lg' >
     
     {patternData.map((value) => (
        <div className='flex flex-col items-center gap-4'>
           <img src = {value.image} className='w-28 h-28 rounded-lg shadow-lg shadow-gray-500 
           cursor-pointer duration-500 ease hover:opacity-80' onClick={() => changeDesign(value.image)}
            />
           <h2>{value.name}</h2>
          </div>
     ))}
  </div>}


    
   </>
  )
}

export default CanvasPage
