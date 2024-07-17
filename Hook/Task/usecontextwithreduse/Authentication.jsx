import React, { createContext, useReducer } from 'react'
import Login from './Login'

//Task
//Creat input ,btn(login)
//Data show of input field after login
//Logout and go on log in page  

export const auth = createContext();

let initValue = {
  user: null,
  isLoading: false
};

const reduserFun = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload }
    case 'Logout':
      return { ...state, user: action.payload }
    case 'loading':
      return { ...state, isLoading: action.payload }

    default:
      throw new Error(`Hey Unexpected ${action.type}`)
  }
}

const Authentication = () => {
  const [state, dispatch] = useReducer(reduserFun, initValue);
  const login = (username) => {
    dispatch({ type: 'login', payload: username })
  }
  const logout = () => {
    // console.log('passChild', passChild);
    
    dispatch({ type: 'Logout', payload: null })
  }
  const loading = (condition) => {
    dispatch({ type: 'loading', payload: condition })
  }
  return (
    <div>
      <h2>COntextApi with Reduser</h2>
      <auth.Provider value={{ user: state.user, login, logout, loading, allState: state }}>
        <Login />
      </auth.Provider>
    </div>
  )
}

export default Authentication
