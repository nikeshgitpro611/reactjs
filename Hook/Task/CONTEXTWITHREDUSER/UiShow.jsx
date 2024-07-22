import { createContext, useReducer } from "react";
import Count from "./components/Count";
import FormHandel from "./components/FormHandel";

const initval = {
  count: 0,
  user: {
    userName : '',
    age: null
  }
};
const reduserFun = (state, action) => {
  switch (action.type) {
    case "Incriment":
      return { ...state, count: state.count + 1 };
    case "Decriment":
      return { ...state, count: state.count - 1 };
      case 'User':
        return {...state.user, user: action.payload}

    default:
      state;
  }
};
export const auth =  createContext()

const UiShow = () => {
  const [state, dispatch] = useReducer(reduserFun, initval);

  return (
    <auth.Provider value={{state, dispatch}}>
      <h2>TASK Menage state by reduser and Context Api</h2>
      <p>01. Creat Count [count : Show, btn + , btn -]</p>
      <Count />
      <FormHandel />
    </auth.Provider>
  );
};
export default UiShow;
