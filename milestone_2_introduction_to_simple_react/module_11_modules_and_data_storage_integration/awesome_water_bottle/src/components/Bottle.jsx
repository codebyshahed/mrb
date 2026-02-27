import React from "react";

const Bottle = ({ bottle }) => {
  console.log(bottle);

  return (
    <div>
      <h1>Bootle</h1>

      <img width={50} src={bottle.img} alt="" />
    </div>
  );
};

export default Bottle;
