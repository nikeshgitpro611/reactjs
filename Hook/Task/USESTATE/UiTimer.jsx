import React, { useState, useEffect } from "react";

//Task Creat 3 btn(start,stop,reset)
const UiTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let time;
    if (isLoading) {
      time = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (timer != 0 && !isLoading) {
     time =  clearInterval(time)
    }

    return () => clearInterval(time);
  }, [isLoading, timer]);

  const handelReset = () => {
    setIsLoading(false);
    setTimer(0);
  };

  return (
    <div>
      <p>Timer Count : {timer}</p>
      <button onClick={() => setIsLoading(true)}>✅</button>
      <button onClick={() => setIsLoading(false)}>⛔</button>
      <button onClick={handelReset}>®️</button>
    </div>
  );
};

export default UiTimer;
