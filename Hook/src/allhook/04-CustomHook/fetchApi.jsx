import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [val, setVal] = useState(null);
    const [error, setError] = useState(false);

    const Api = async () => {
        const responce = await fetch(url);
        if (!responce.ok) {
            setError(true)
        }
        const json = await responce.json();
        // console.log('json : ', json);
        setVal(json)
    };

    useEffect(() => {
        Api()
    }, [url])

    return { val, error }
}

export default useFetch
