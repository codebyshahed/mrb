import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import {
  addToStoredCart,
  getStoredCart,
  removeFromCart,
} from "../utilities/localStorage";
import Cart from "./Cart";

const Bottles = ({ bottlePrimise }) => {
  const bottleData = use(bottlePrimise);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCartIds = getStoredCart();

    const storedCart = [];

    for (const id of storedCartIds) {
      const cartBottle = bottleData.find((bottle) => bottle.id === id);

      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, []);

  const handleAddTocart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };

  return (
    <div>
      <div className="space-y-4 mb-10">
        <h1 className="text-2xl">Bottles: {bottleData.length}</h1>
        <h1 className="text-2xl font-light">Cart: {cart.length}</h1>

        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} />
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
