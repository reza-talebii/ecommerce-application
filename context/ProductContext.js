import React, { createContext, useContext } from "react";

const ProductContext = createContext();

const useProductContext = () => useContext(ProductContext);
export default useProductContext;
