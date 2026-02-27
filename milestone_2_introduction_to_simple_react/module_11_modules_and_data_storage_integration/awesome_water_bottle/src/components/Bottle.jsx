import React from "react";

const Bottle = ({ bottle, handleAddTocart }) => {
  const { name, img, price, stock } = bottle;

  return (
    <div className="space-y-4">
      <img src={img} alt="" />
      <div className="">
        <h1>{name}</h1>
        <p>${price}</p>
        <p>{stock} remaining</p>
      </div>

      <div className="">
        <button
          onClick={() => handleAddTocart(bottle)}
          className="px-5 py-2 bg-white text-black"
        >
          By Now
        </button>
      </div>
    </div>
  );
};

export default Bottle;
