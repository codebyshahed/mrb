import React, { use, useState } from "react";
import Bottle from "./Bottle";

const Bottles = ({ bottlePrimise }) => {
  const bottleData = use(bottlePrimise);
  const [cart, setCart] = useState([]);

  const handleAddTocart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <div className="space-y-4 mb-10">
        <h1 className="text-2xl">Bottles: {bottleData.length}</h1>
        <h1 className="text-2xl font-light">Cart: {cart.length}</h1>
      </div>

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
