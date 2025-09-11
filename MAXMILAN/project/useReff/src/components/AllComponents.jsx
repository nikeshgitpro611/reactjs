import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export const Player = () => {
  const inputReff = useRef();
  const [onclickBtn, setOnclickBtn] = useState(null);

  const handelBtnClick = () => {
    setOnclickBtn(inputReff.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {onclickBtn ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputReff} />
        <button onClick={handelBtnClick}>Set Name</button>
      </p>
    </section>
  );
};

export const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStart, setTimeStart] = useState(false);
  const timer = useRef();
  const dialogReff = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialogReff.current.open();
  }

  const handelBtnClick = () => {
    timer.current = setInterval(() => {
      // setTimeExpired(!timeExpired);
      // dialogReff.current.open();
      setTimeRemaining((preTimeRemaining) => preTimeRemaining - 10);
    }, 10);
    // setTimeStart(!timeStart);
  };

  const handelClose = () => {
    dialogReff.current.close();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal result="lost" targetTime={targetTime} ref={dialogReff} timeRemaining={timeRemaining}/>
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You have lost</p>}
        <p className="challenge-time">
          {timerIsActive} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStart ? handelClose : handelBtnClick}>
            {timerIsActive ? "Stop" : "Start"} Challenges
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? " timer active" : "timer inactive"}
        </p>
      </section>
    </>
  );
};

export const ResultModal = ({ ref, result, targetTime,timeRemaining }) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));
  const uLost = timeRemaining <=0

  const formatTimeInSecond = (timeRemaining / 1000).toFixed(2);
  return (
    <dialog ref={dialog} className="result-modal">
      <p>
       { uLost && `You <strong>Lost</strong>`}
      </p>
      <p>
        You took <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatTimeInSecond} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};
