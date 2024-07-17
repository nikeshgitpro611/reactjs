import React, { useContext, useRef, useState } from 'react'
import { auth } from './Authentication'

const Login = () => {
    const { user, login, logout, loading, allState } = useContext(auth);
    const [username, setUserName] = useState('')
    const reff = useRef()
    // console.log('User : ', user, loading);

    // handel form
    const handelSubmit = async (e) => {
        e.preventDefault()
        loading(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        loading(false)
        login(reff.current.value)
        // logout(reff.current.value = '')
    }
    const handelChange = () => {
        setUserName(reff.current.value)
    }
    const logoutHandel = () => {
        logout()
        setUserName('')
    }

    if (user) {
        return <p>Hey! Welcom {user.username} you sucessful Login <button onClick={logoutHandel}>Logout</button></p>
    }
    return (
        <div>
            <form action="" onSubmit={handelSubmit}>
                <input type="text" ref={reff} value={username} onChange={handelChange} />
                <button type='submit'>➕</button>
                {allState.isLoading && <p>Loading...</p>}
            </form>

        </div>
    )
}

export default Login
