import React, { useRef, useState } from 'react'

const Formreff = () => {
    const refContainer = useRef();
    const [val, setVal] = useState([])
    //Hnadle Submit with consolidated Arr val
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputVal =  refContainer.current.value;
        setVal((preVal)=> [...preVal, inputVal])
    }

    console.log('val : ', val);
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        ref={refContainer}
                        className='form-input'
                    />
                </div>
                <button type='submit' className='btn btn-block'>
                    submit
                </button>
            </form>
        
            {val.map((data, index) => <ul key={index}>{data}</ul>)}
        </div>
    )
}

export default Formreff
