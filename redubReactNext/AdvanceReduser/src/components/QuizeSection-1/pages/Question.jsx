import React from 'react'
import Option from './Option';

const Question = ({ questions, index, dispatch, answer }) => {
  console.log("Question : ", questions);

  return (
    <div className='options'> 
      <h2>Question {index + 1}: {questions.question}</h2>
      <Option questions={questions} index={index} dispatch={dispatch} answer={answer} />
    </div>
  )
}

export default Question;
