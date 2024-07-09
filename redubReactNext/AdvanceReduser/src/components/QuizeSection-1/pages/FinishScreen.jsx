import React from 'react'



const FinishScreen = ({ points, maxPossiblePoints }) => {
    const perCentage = (points / maxPossiblePoints) * 100;

    let Emoji;
    if (perCentage === 100) {
        return Emoji = "😊😊"
    }else{
        return  Emoji = "😈😈"
    }
    return (
        <div className='result'>
            <p> {Emoji} Your Scored Is <strong>{points}</strong>out put of{maxPossiblePoints}</p>
            {Math.ceil(perCentage)}

        </div>
    )
}

export default FinishScreen
