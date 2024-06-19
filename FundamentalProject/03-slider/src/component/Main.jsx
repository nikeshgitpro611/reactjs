import React, { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Main = () => {
    const [index, setIndex] = useState(0);
    const { id, image, job, name, text } = reviews[index];

    const preValue = () => {
        setIndex(prevValue => {
            const newInex = prevValue - 1;
            if (newInex < reviews.length - 1 ) {
                return 0
            }
            return newInex
        })
    };

    const nextValue = () => {
        setIndex(preVal => preVal + 1)
    };

    return (
        <main>
            <article className='review'>
                <div className="img-containe">
                    <img src={image} alt={name} className='person-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                    <h4 className='author'>{name}</h4>
                    <p className='job'>{job}</p>
                    <p className='info'>{text}</p>
                    
                    <div className="btn-container">
                        <button className='prev-btn' onClick={preValue}><FaChevronLeft /></button>
                        <button className='next-btn' onClick={nextValue}><FaChevronRight /></button>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Main
