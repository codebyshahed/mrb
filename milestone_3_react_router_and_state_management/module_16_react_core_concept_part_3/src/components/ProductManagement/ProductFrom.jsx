import React, { useState } from "react";

const ProductFrom = ({ handle_add_products }) => {
  const [err, setErr] = useState("");
  const handle_product_submit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setErr("plz provide a name");
      return;
    } else if (price === 0) {
      setErr("plz provide a price");
      return;
    } else if (price < 0) {
      setErr("plz provide a positive number");
      return;
    } else {
      setErr("");
    }

    const new_product = {
      name,
      price,
      quantity,
    };
    // set new product
    handle_add_products(new_product);
  };

  return (
    <form onSubmit={handle_product_submit}>
      <div className="">
        <h1>add a product</h1>
      </div>
      <input type="text" name="name" id="name" placeholder="product name" />
      <br />
      <input type="text" name="price" id="price" placeholder="product price" />
      <br />
      <input type="text" name="quantity" id="quantity" />
      <br />
      <button type="submit">Continue</button>
      <br />
      <p className="text-red-500">
        <small>{err}</small>
      </p>
    </form>
  );
};

export default ProductFrom;
