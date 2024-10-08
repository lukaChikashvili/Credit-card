import React from 'react'

const Lights = () => {
  return (
  <>
     
 <directionalLight
    castShadow
    position={ [ 4, 4, 1 ] }
    intensity={ 1.5 }
    shadow-mapSize={ [ 1024, 1024 ] }
    shadow-camera-near={ 1 }
    shadow-camera-far={ 10 }
    shadow-camera-top={ 10 }
    shadow-camera-right={ 10 }
    shadow-camera-bottom={ - 10 }
    shadow-camera-left={ - 10 }
/>

<pointLight position={[0, 20, 30]} />


  </>
  )
}

export default Lights
