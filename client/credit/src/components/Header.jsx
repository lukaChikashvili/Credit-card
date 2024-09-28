import React from 'react'
import { Image } from 'lucide-react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-10 flex items-center justify-between w-full px-12 py-4'>

        <p></p>
        <div className='flex gap-2 cursor-pointer items-center text-white'>
            <Image />
            <h2 className='text-xl text-white'>Environment</h2>
        </div>
    </div>
  )
}

export default Header
