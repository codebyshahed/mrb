import React from "react";

const ProductFrom = () => {
  const handle_product_submit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    // console.log(name, price, quantity);

    const new_product = {
      name,
      price,
      quantity,
    };
    // print new product
    console.log(new_product);
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
    </form>
  );
};

export default ProductFrom;
