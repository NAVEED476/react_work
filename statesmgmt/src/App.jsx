import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
// import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

// function First({ handleData }) {
//   const age = 10;
//   handleData(age);
//   return <div>First</div>;
// }

// function Second({ age }) {
//   return (
//     <div>
//       Second
//       <p> Your age is: {age}</p>
//     </div>
//   );
// }

export default App;
