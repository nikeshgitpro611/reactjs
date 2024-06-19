import React, { useState } from 'react'

const Tour = ({ image, info, name, price, id, removeTours }) => {
  const [hide, setHide] =  useState(false)
  return (
    <article className='single-tour'>

      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {hide ? info : `${info.substring(0,156)}`}
          <button className='info-btn' onClick={()=> setHide(!hide)}>{hide ? 'Show Less' : 'Show More'}</button>
          <button className='delete-btn btn-block btn' onClick={()=>removeTours(id)}>not interested</button>
        </p>
      </div>
    </article>
  )
}

export default Tour
