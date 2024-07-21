import React, { useRef, useState } from "react";
import { data } from "../../data";
//Creat TodoList
//Feature 1. input and button 2. show all input data and creat remove button

const TodoList = () => {
  const [type, setType] = useState("");
  const [arr, setArr] = useState([]);
  const ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (type != "") {
      setArr([...arr, type]);
    }
    setType("");
  };

  const handelRemove = (id) => {
    const filterData = arr.filter((data, index)=> index != id);
    setArr(filterData)
  }
  return (
    <div>
      <h2>Todo List...</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={type}
          ref={ref}
          onChange={() => setType(ref.current.value)}
        />
        <button>➕</button>
      </form>
      <div className="">
        {arr.map((data, index) => {
          return (
            <div className="">
              <li>
                {data} <button onClick={() => handelRemove(index)}>⛔</button>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
