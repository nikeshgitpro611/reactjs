import {  Header, Result, UserInput } from "./components/AllInOneComponents";
import "./index.css";
import { commonFunction } from "./util/investment";

 
function App() {
  const { userInput, onChange } = commonFunction();
  return (
    <header
      id="header"
    >
      <Header />
      <UserInput  commonFunction = {commonFunction}/>
     
    </header>
  );
}

export default App;
