import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(1); // State
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const clickFun = (val) => {
    setCounter(counter + val);
  };



  if (counter === 10) {
    return <h1>You have reached max counter value</h1>;
  }

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <p className={counter % 2 === 0 ? "red" : "green"}>
        Counter is: {counter % 2 === 0 ? "Even" : "Odd"}
      </p>
      <button onClick={() => clickFun(1)}>Add 1</button>
      <button onClick={() => clickFun(-1)}>Dec 1</button>
      
    </div>
  );
};
