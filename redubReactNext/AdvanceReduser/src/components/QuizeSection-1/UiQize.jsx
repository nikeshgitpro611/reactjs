import React, { useEffect, useReducer } from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Loader from './pages/Loader'
import Error from './pages/Error'
import StartScreen from './pages/StartScreen'


const initialValue = {
    questions: [],
    status: 'loading'
}


const reduserFun = (state, action) => {
    switch (action.type) {
        case 'dataRecevied':
            return { ...state, questions: action.payload, status: 'ready' }
        case 'dataFailed':
            return { status: 'Error' }

        default:
            throw new Error('Action is Unknown..');
    }
}

const UiQize = () => {

    // ------------Reduser Start----------
    const [state, dispatch] = useReducer(reduserFun, initialValue)
    const { questions, status } = state



    //------------Reduser End-------


    //fetching API  
    useEffect(() => {
        fetch('http://localhost:8000/questions').then(data => data.json()).then(data => dispatch({ type: 'dataRecevied', payload: data })).catch(err => dispatch({ type: 'dataFailed' }))
    }, [])

    return (
        <div>
            <Header />
            <Main>
                {(status === 'loading') && <Loader />}
                {(status === 'Error') && <Error />}
                {(status === 'ready') && <StartScreen />}
            </Main>

        </div>
    )
}

export default UiQize
