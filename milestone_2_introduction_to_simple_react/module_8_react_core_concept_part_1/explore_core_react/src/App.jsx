import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <Todo task="Learn React" isDone={true} time='50' />
      <Todo task="Revise JS" isDone={false} />
      <Todo task="Take a shower" isDone={true} />
    </>
  );
}

function Salami({ ocassion, ammount = 0 }) {
  // console.log(ocassion);

  return (
    <div>
      <h1>Salami For: {ocassion}</h1>
      <h2>Ammount: {ammount}tk</h2>
    </div>
  );
}

export default App;
