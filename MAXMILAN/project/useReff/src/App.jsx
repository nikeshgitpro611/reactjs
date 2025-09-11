import { Player, TimerChallenge } from "./components/AllComponents.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title = 'Easy' targetTime = {1}/>
        <TimerChallenge title = 'Not Easy' targetTime = {2}/>
        <TimerChallenge title = 'Easy' targetTime = {4}/>
      </div>
    </>
  );
}

export default App;