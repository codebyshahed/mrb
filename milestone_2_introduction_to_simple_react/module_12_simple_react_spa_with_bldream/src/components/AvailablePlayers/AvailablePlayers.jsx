import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);
  
  return (
    <div className="px-4">
      <h1>AvailablePlayers</h1>
    </div>
  );
};

export default AvailablePlayers;
