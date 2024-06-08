import React from 'react';
import useFetch from './fetchApi';

const UiTest = () => {
    const customHook = useFetch('https://api.github.com/users/QuincyLarson');
    const { val, error } = customHook;
    // console.log('val : ', val.id);
    if (error) {
        return <p>Hey! Something Went Wrong...</p>
    }

    return (
        <div>
            <img
                style={{ width: '150px', borderRadius: '25px' }}
                src={val?.avatar_url}
                alt={val?.name}
            />
            <h2>{val?.name}</h2>
            <h4>works at {val?.company}</h4>
            <p>{val?.bio}</p>
        </div>
    )
}

export default UiTest
