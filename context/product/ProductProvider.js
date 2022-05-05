import React, { useState } from "react";
import toast from "react-hot-toast";

import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);

  //quantity
  const incrementQty = () => setQty((prev) => prev + 1);
  const decrementQty = () => (qty > 1 ? setQty((prev) => prev - 1) : setQty(1));

  //carts
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    if (checkProductInCart) {
      setTotalPrice((prev) => prev + product.price * quantity);
      setTotalQuantities((prev) => prev + quantity);

      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to cart`);
  };

  const values = {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    qty,
    incrementQty,
    decrementQty,
    onAdd,
    totalQuantities,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
