import React, { useEffect, useId, useRef, useState } from 'react'

const FormAddUi = () => {
    const [data, setData] = useState([]);
    const inputRef = useRef()
    const bodyRef = useRef()
    const id = useId()

    const fetchApi = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await responce.json();
        setData(json)
    }

    useEffect(() => {
        fetchApi()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputTile = inputRef.current.value;
        const bodyTitle = bodyRef.current.value;
        if (inputTile != '' && inputTile != '') {
            setData(prvDat => [{ id, title: inputTile, body: bodyTitle }, ...prvDat])
            inputRef.current.value = ''
            bodyRef.current.value = ''
        }
    }

    return (
        <div>
            <h2>form UseReff data</h2>
            <div className="">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} placeholder='Input Data..' style={{ padding: '1rem', marginRight: '1rem' }} />
                    <input type="text" ref={bodyRef} placeholder='Body Data..' style={{ padding: '1rem' }} />
                    <button style={{ padding: '0.9rem' }}>➕</button>
                </form>
            </div>

            {data.map(data => <p>🏹 {data.title}<br />😀 {data.body}</p>)}

        </div>
    )
}

export default FormAddUi
