import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Person></Person>

      <Person />
      <Sports />
    </>
  );
}

function Person() {
  const age = 17;
  const name = "Shahed";
  return (
    <h1>
      I'm {name}, age: {age}
    </h1>
  );
}

function Sports() {
  return <h4>I love Programming</h4>;
}

export default App;
