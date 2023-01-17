import React, { useContext, useEffect, useState } from "react";
import AllFilter from "../../Components/Filters/AllFilter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Searchbar from "../../Components/SearchBar/Searchbar";
import styles from "./ProductList.module.css";
import {
  separateColorValue,
  separateTypeValue,
} from "../../Components/Filters/FilterValueSeprator";
import { ProductContext } from "../../Context/ProductContext";
const ProductList = () => {
  const {
    productState:{color,gender,price,type,max_price,search},
    cartState: { products },
    cartDispatch,
  } = useContext(ProductContext);
  const [colors, setColors] = useState([]);
  const [types, setTypes] = useState([]);
  const getAllProducts = async () => {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const data = await response.json();
    cartDispatch({ type: "FETCH_PRODUCTS", payload: data });
    setColors(separateColorValue(data));
    setTypes(separateTypeValue(data));
  };
  const filterProducts = () => {
    let sortedProducts = products;
    if(color.length!==0){
      sortedProducts=sortedProducts.filter((item)=>color.includes(item.color));
    }
    if(gender.length!==0){
      sortedProducts=sortedProducts.filter((item)=>gender.includes(item.gender));
    }
    if(price.length!==0){
      sortedProducts=sortedProducts.filter((item)=>item.price<=max_price )
    }
    if(type.length!==0){
      sortedProducts=sortedProducts.filter((item)=>type.includes(item.type));
    }
    if(search!==""){
      sortedProducts=sortedProducts.filter((item)=>item.type==search || item.type==search || item.color==search);
    }

    return sortedProducts;
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div className={styles.productAndFilterContainer}>
        <div className={styles.filterContainer}>
          <Searchbar />
          <AllFilter colors={colors} types={types} />
        </div>
        <div className={styles.productContainer}>
          {filterProducts()?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
