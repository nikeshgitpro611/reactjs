import React from 'react'

const Option = ({ questions, dispatch, answer }) => {
    const { id, question, points, options, correctOption } = questions;

    const hasAnswered = answer != null;
    return (
        <div className="options">
            {options.map((data, index) => (
                <button className={`btn btn-option ${index === answer ? 'answer' : ""} ${hasAnswered ? index === correctOption ? "correct" : "wrong" : ""}`} key={data} onClick={() => dispatch({ type: 'newAnswer', payload: index })}>{data}</button>
            ))}
        </div>
    )
}

export default Option
