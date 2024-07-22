import React, { useContext, useRef } from "react";
import { auth } from "../UiShow";

const FormHandel = () => {
  const { state, dispatch } = useContext(auth);
  const inputref = useRef();
  const ageRef = useRef();
  console.log(state);
  const setName = (userName) => {
    dispatch({ type: "User", payload: { ...state.user, userName } });
  };
  const setAge = (age) => {
    dispatch({ type: "User", payload: { ...state.user, age } });
  };
  console.log(state);
  return (
    <>
      <div>FormHandel</div>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          value={state.user.userName}
          ref={inputref}
          onChange={() => setName(inputref.current.value)}
        />
      </label>
      <label htmlFor="number">
        Age:
        <input
          type="number"
          value={state.user.age}
          ref={ageRef}
          onChange={() => setAge(ageRef.current.value)}
        />
      </label>

      <p>Content Data</p>
      {state.user.age != null &&
        <p>
          Hey!{state.user.userName} and your {state.user.age}
        </p>}
    </>
  );
};

export default FormHandel;
