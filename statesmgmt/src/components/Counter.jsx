import { useState } from "react";

function Counter() {
  //               dispatch
  const [counter, setCounter] = useState(0);

  const [age, setAge] = useState(10);
  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <h3>Age: {age}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
    </div>
  );
}

export default Counter;
// lightweight representation of original DOM.
// VDO
