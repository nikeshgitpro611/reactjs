import React from 'react'

const Card = (props) => {
  return (
    <div className={`Card ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
