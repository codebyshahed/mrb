import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="flex items-center gap-4">
      {cart.map((bottle, index) => (
        <div className="relative" key={index}>
          <img width={50} src={bottle.img} alt="bottle" />

          <button
            onClick={() => handleRemoveFromCart(bottle.id)}
            className="absolute cursor-pointer"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
