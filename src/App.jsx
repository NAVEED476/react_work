import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <UserDetails name="john" add="Pune" age={10} isMarried={true} />

      <UserDetails name="jack" add="Kerala" age={34} isMarried={false} /> */}
      <Counter />
    </div>
  );
}

export default App;
