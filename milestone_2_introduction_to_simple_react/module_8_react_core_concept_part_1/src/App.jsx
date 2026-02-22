import "./App.css";
// import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {
  const actors = ["Bappa Raj", "Salman Khan", "Tareq Kaka"];

  // singers
  const singers = [
    {
      id: 1,
      name: "Arijit Singh",
      age: 38,
      country: "India",
      genre: "Playback, Romantic",
      famousSong: "Tum Hi Ho",
    },
    {
      id: 2,
      name: "Shreya Ghoshal",
      age: 41,
      country: "India",
      genre: "Playback, Classical",
      famousSong: "Teri Ore",
    },
    {
      id: 3,
      name: "Atif Aslam",
      age: 42,
      country: "Pakistan",
      genre: "Pop, Playback",
      famousSong: "Jeene Laga Hoon",
    },
    {
      id: 4,
      name: "Taylor Swift",
      age: 36,
      country: "USA",
      genre: "Pop, Country",
      famousSong: "Love Story",
    },
  ];

  return (
    <>
      {/* <Todo task="Learn React" isDone={true} time='50' />
      <Todo task="Revise JS" isDone={false} />
      <Todo task="Take a shower" isDone={true} /> */}

      {actors.map((actor, index) => (
        <Actor actor={actor} key={index} />
      ))}
      <br />

      {/* <hr /> */}

      {/* singers */}
      {singers.map((singer, index) => (
        <Singers singer={singer} key={index} />
      ))}
    </>
  );
}

export default App;
