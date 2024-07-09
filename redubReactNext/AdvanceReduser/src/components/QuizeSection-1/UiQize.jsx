import React, { useEffect, useReducer } from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Loader from './pages/Loader'
import Error from './pages/Error'
import StartScreen from './pages/StartScreen'
import Question from './pages/Question'
import NextButton from './pages/NextButton'
import ErrorBoundary from './pages/errorBoundary'
import Progress from './pages/Progress'
import FinishScreen from './pages/FinishScreen'

const initialValue = {
    questions: [],
    status: 'loading',
    index: 0,
    answer: null,
    points: 0
}


const reduserFun = (state, action) => {
    switch (action.type) {
        case 'dataRecevied':
            return { ...state, questions: action.payload, status: 'ready' }
        case 'dataFailed':
            return { status: 'Error' }
        case 'start':
            return { ...state, status: 'start' }
        case 'newAnswer':
            const currentQuestion = state.questions.at(state.index);
            return { ...state, answer: action.payload, points: action.payload === currentQuestion.correctOption ? state.points + currentQuestion.points : state.points }
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null }
        case 'finish':
            return {...state, status : 'finished'}
        default:
            throw new Error('Action is Unknown..');
    }
}

const UiQize = () => {

    // ------------Reduser Start----------
    const [state, dispatch] = useReducer(reduserFun, initialValue)
    const { questions, status, index, answer,points } = state;
    const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);


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
                {(status === 'ready') && <StartScreen questionsNumber={questions.length} dispatch={dispatch} />}
                {(status === 'start') && (
                    <>
                        <ErrorBoundary>
                            <Progress questionsNumber={questions.length} index = {index} points ={points} totalPoints = {totalPoints}/>
                            <Question questions={questions[index]} dispatch={dispatch} index={index} answer={answer} />
                            <NextButton dispatch={dispatch} answer={answer} index={index} questionsNumber={questions.length}/>
                        </ErrorBoundary>
                    </>
                )}
                {(status === 'finished') && <FinishScreen points = {points} maxPossiblePoints =  '200'/>}

            </Main>

        </div>
    )
}

export default UiQize
