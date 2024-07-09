import React from 'react'

const Progress = ({index, questionsNumber, totalPoints, points}) => {
  return (
    <header className='progress'>
        <progress max={questionsNumber} value={index}/>
        <p>Question : <strong>{index} </strong>/ {questionsNumber}</p>
        <p><strong>{points}</strong> / {totalPoints} points</p>
        
    </header>
  )
}

export default Progress
