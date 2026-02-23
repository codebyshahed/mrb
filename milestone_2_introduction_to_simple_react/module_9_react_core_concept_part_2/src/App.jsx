import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Players from "./Players";

const fetchData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

function App() {
  /**
   * button clicked function
   */
  const handleClicked = () => {
    alert(`I'm clicked!`);
  };

  const handleClickedToAddFive = (num) => {
    alert(`The number ${num} + 5 is: ${num + 5}`);
  };

  return (
    <>
      {/**
       * handle button clicked function
       */}
      {/* <button onClick={handleClicked}>Click me!</button>
      <button onClick={() => handleClickedToAddFive(15)}>
        Clicked me to add 5
      </button>

      <br />
      <br />

      <Counter />

      <br />
      <br />

      <Batsman /> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchData={fetchData} />
      </Suspense> */}

      <Players />
    </>
  );
}

export default App;
