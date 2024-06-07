import React, { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const UseEffectMultiple = () => {

    const [isLoading, SetisLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const fetchApi = async () => {
        try {
            const responce = await fetch(url);
            if (!responce.ok) {
                setError(true);
                SetisLoading(false);
                return;
            }

            const json = await responce.json();
            setData(json)


        } catch (error) {
            setError(true)
        }
        SetisLoading(false)
    }

    useEffect(() => { fetchApi() }, [url]);

    if (isLoading) {
        return <h2>Loading .......</h2>
    }

    if (error) {
        return <h4>Hey! Something Went Wrong.</h4>
    }

    console.log('data : ', data);
    const { avatar_url, name, company, bio } = data;
    return (
        <div>
            <img
                style={{ width: '150px', borderRadius: '25px' }}
                src={avatar_url}
                alt={name}
            />
            <h2>{name}</h2>
            <h4>works at {company}</h4>
            <p>{bio}</p>
        </div>
    )
}

export default UseEffectMultiple
