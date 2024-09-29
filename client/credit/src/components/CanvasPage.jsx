import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import Card from './Card'
import Lights from './Lights'
import { presetData } from './PresetData'
import { CardContext } from '../context/CardContext'


const CanvasPage = () => {

  const { modal,  setPreset, backModal } = useContext(CardContext);

 
  const changePreset = (name) => {
      setPreset(name);

    

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


 {backModal && <div className='absolute top-36 right-4 z-10 flex flex-col gap-4 bg-white p-4 rounded-lg' >
 dgkdgdg
  </div>}


    
   </>
  )
}

export default CanvasPage
