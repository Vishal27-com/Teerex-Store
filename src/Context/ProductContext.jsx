import React, { createContext, useEffect, useReducer } from 'react'
import { cartReducer, productReducer } from '../Reducer/reducer';
export const ProductContext=createContext();
const Cart_InitState={
    products:[],
    cart:[]
}
const Product_InitState={
    color:[],
    gender:[],
    price:[],
    max_price:0,
    type:[],
    search:""
}
const ProductContextProvider = ({children}) => {
    const [productState,productDispatch]=useReducer(productReducer,Product_InitState);
    const [cartState,cartDispatch]=useReducer(cartReducer,Cart_InitState);
  return (
    <ProductContext.Provider value={{productState,productDispatch,cartState,cartDispatch}}>
    {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider