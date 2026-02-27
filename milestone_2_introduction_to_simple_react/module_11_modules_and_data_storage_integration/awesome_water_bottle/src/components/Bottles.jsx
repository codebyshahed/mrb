import React, { use, useState } from "react";
import Bottle from "./Bottle";

const Bottles = ({ bottlePrimise }) => {
  const bottleData = use(bottlePrimise);
  const [cart, setCart] = useState([]);

  const handleAddTocart = (bottle) => {
    console.log(bottle);
  };

  return (
    <div>
      <h1 className="text-2xl mb-10">Bottles: {bottleData.length}</h1>

      <div className="grid grid-cols-3 gap-8">
        {bottleData.map((bottle, index) => (
          <Bottle
            handleAddTocart={handleAddTocart}
            bottle={bottle}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
