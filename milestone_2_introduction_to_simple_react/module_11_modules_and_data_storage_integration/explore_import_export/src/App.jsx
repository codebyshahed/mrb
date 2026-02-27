import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { add, devide as vag, diff, mult } from "./utils/math/math";
import { tax } from "./utils/tax/taxt";

function App() {
  const [count, setCount] = useState(0);

  const sum = add(2, 4);
  const minus = diff(5, 1);
  const multiply = mult(4, 2);
  const vagfol = vag(25, 5);

  const mytax = tax(4, 2);
  // console.log(mytax)

  // console.log(sum, minus, multiply, vagfol);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
