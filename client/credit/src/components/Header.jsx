import React, { useContext } from 'react'
import { IdCard, Image } from 'lucide-react'
import { CardContext } from '../context/CardContext';



const Header = () => {
   
    // use context
    const { setModal, modal, backModal, setBackModal  } = useContext(CardContext);



  return (
    <div className='fixed top-0 left-0 z-10 flex items-center justify-between w-full px-12 py-4'>

        <p></p>
        
<div className='flex items-center gap-8'>
        <div className='flex gap-2 cursor-pointer items-center text-white'>
            <Image />
            <h2 className='text-xl text-white' onClick={() => setModal(!modal)}>Environment</h2>
          
        </div>

        <div className='flex gap-2 cursor-pointer items-center text-white'>
          <IdCard />
        <h2 className='text-xl text-white' onClick={() => setBackModal(!backModal)}>Card Background</h2>
        </div>
        </div>
      
    </div>
  )
}

export default Header
