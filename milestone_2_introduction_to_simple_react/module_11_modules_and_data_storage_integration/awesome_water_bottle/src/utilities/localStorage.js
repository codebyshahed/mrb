const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }

  return [];
};

const saveCartToLocalstorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartInLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  saveCartToLocalstorage(newCart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);

  saveCartToLocalstorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoredCart,
  addItemToCartInLocalStorage as addToStoredCart,
  removeFromLocalStorage as removeFromCart,
};
