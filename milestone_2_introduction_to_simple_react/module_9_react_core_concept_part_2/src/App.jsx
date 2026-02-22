import "./App.css";

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
      <button onClick={handleClicked}>Click me!</button>
      <button onClick={() => handleClickedToAddFive(15)}>
        Clicked me to add 5
      </button>
    </>
  );
}

export default App;
