import { useState } from "react";

export default function Batsman() {
  // states
  const [runs, setRuns] = useState(0);

  // handle singles
  const handleSingles = () => {
    const newRun = runs + 1;
    setRuns(newRun);
  };

  // handle six
  const handleSix = () => {
    const newRun = runs + 6;
    setRuns(newRun);
  };

  // handle four
  const handleFour = () => {
    const newRun = runs + 4;
    setRuns(newRun);
  };

  return (
    <div className="">
      <h3>Player name: Bangla Batsman</h3>
      <h1>Score: {runs}</h1>

      <div className="">
        {runs >= 50 && <p>Half senchury, your run: {runs}</p>}
      </div>

      {/* buttons */}
      <div className="">
        <button onClick={handleSingles}>Single</button>
        <button onClick={handleSix}>Six</button>
        <button onClick={handleFour}>Foure</button>
      </div>
    </div>
  );
}
