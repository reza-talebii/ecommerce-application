import React, { useState } from "react";

import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);

  //quantity
  const incrementQty = () => setQty((prev) => prev + 1);
  const decrementQty = () => (qty > 1 ? setQty((prev) => prev - 1) : setQty(1));

  const values = {
    showCart,
    cartItems,
    totalPrice,
    qty,
    incrementQty,
    decrementQty,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
