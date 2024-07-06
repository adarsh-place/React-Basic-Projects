import Header from "./components/Header";
import InputDiv from "./components/inputDiv";
import { useState } from "react";
import ResultRows from "./components/ResultRows";


function App() {

  const [enteredInput,setInput] = useState({
    initialInvestment :10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  });

  const inputIsValid = enteredInput.duration >=1;

  function handleChange(inputIdentifier,newValue){
    setInput((prevInput)=> {
      return{
        ...prevInput,
        [inputIdentifier]: +newValue
      };
    });
  }


  return (
    <>
      <Header />

      <InputDiv userInput={enteredInput} onChange={handleChange}/>


      {inputIsValid ? <ResultRows input={enteredInput}/> : <p className="center">Please enter a positive duration</p>}
    </>
  )
}

export default App
