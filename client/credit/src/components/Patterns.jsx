import React from 'react'

const Patterns = ({ image, name}) => {
  return (
    <div >
       <img src = {image} />
       <h2>{name}</h2>
    </div>
  )
}

export default Patterns
