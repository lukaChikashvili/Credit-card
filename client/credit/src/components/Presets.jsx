import React from 'react'

const Presets = ({ image, name}) => {
  return (
    <div>
        <img src = {image} />
        <h1>{name}</h1>
    </div>
  )
}

export default Presets
