import React from 'react'
import Tour from './Tour';

const Tours = ({tourData, removeTours}) => {
  // console.log('tourData');
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className="tours">
        {tourData.map(data => <Tour key={data.id} {...data} removeTours = {removeTours}/>)}
      </div>
    </section>
  )
}

export default Tours
