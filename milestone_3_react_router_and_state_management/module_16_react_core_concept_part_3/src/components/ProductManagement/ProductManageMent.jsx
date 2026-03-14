import React, { useState } from "react";
import ProductFrom from "./ProductFrom";
import ProductTable from "./ProductTable";

const ProductManageMent = () => {
  const [products, setProducts] = useState([]);

  const handle_add_products = (new_products) => {
    const new_prodcut = [...products, new_products];
    setProducts(new_prodcut);
  };

  return (
    <div>
      <ProductFrom handle_add_products={handle_add_products} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManageMent;
