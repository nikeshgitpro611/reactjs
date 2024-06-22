import React from 'react'
import '../../assets/Css/Avatar.css'

const Avatar = ({image, name}) => {
  return (
    <div className='avatar'>
      <img src={image} alt={name} />
    </div>
  )
}

export default Avatar
