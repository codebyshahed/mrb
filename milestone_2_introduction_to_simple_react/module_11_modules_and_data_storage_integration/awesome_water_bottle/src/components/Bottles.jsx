import React, { use } from "react";
import Bottle from "./Bottle";

const Bottles = ({ bottlePrimise }) => {
  const bottleData = use(bottlePrimise);

  return (
    <div>
      <h1>Bottles: {bottleData.length}</h1>

      <div className="">
        {bottleData.map((bottle, index) => (
          <Bottle bottle={bottle} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
