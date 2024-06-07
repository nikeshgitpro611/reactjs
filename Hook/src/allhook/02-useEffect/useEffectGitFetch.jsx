import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users';

const UseEffectGitFetch = () => {
    const [val, setVal] = useState([]);

    const fetchApi = async () => {
        const responce = await fetch(url);
        const json = await responce.json();
        setVal(json)
    }

    useEffect(() => {
        fetchApi();

        // return () => { }
    }, [url]);

    return (
        <section>
            <h3>github users</h3>
            {val.map(data => {
                const { id, login, avatar_url, html_url } = data;
                return (
                    <li key={id} style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', gap: '4rem', margin: '3rem', justifyContent: 'center' }}>
                        <img src={avatar_url} alt={login} style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                            <h5>{login}</h5>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                )
            })}
        </section>
    )
}

export default UseEffectGitFetch
