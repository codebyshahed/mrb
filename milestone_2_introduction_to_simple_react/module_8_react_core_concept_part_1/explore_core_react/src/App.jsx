import "./App.css";

function App() {
  return (
    <>
      {/* <Player name="sakib" runs="512" /> */}
      <Salami ocassion="Rojar Eid" ammount="30" />
      <Salami ocassion="Graduation" ammount="500" />
      <Salami ocassion="Finish Diploma" />
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
