import React, { useEffect, useReducer } from 'react'
import '../../assets/Css/Input.css'
import { validate } from '../utils/Validate';

//ReduserFun
const reduserFun = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, value: action.val, isValid: validate(action.val, action.validators) };

        case 'TOUCH':
            return { ...state, isTouched: true, isValid: true };

        default:
            return state;
    }
};


const Input = (props) => {
    //For sate menage i will use reduser
    const [state, dispach] = useReducer(reduserFun, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    })

    //de-stracture
    const { id, onInput } = props;
    const { value, isValid } = state;

    useEffect(() => {
        onInput(id, value, isValid)
      }, [id, value, isValid, onInput]);

    const changeHandler = (e) => {
        dispach({ trype: 'CHANGE', value: e.target.value, })
    };

    const touchHandler = () => { };

    const element = props.element === 'input' ? (
        <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler}
            onBlur={touchHandler} />
    ) : (<textarea id={props.id} rows={props.rows || 3} onChange={changeHandler}
        onBlur={touchHandler} />);

    return (
        <div
            className={`form-control ${!state.isValid && state.isTouched &&
                'form-control--invalid'}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!state.isValid && state.isTouched && <p>{props.errorText}</p>}
        </div>
    );
}

export default Input
