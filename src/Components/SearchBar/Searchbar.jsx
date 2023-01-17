import React, { useContext, useState } from 'react'
import { ProductContext } from '../../Context/ProductContext';
import styles from "./Searchbar.module.css"
const Searchbar = () => {
  const {
    productState:{search},
    productDispatch
  } = useContext(ProductContext);
  const [text,setText]=useState("");
  const searchProduct=()=>{
    productDispatch({type:"BY_SEARCH",payload:text});
  }
  return (
    <div className={styles.searchbox}>
    <input type="text" placeholder='Search for products' className={styles.inputbox} onChange={(e)=>{setText(e.target.value)}} onKeyUp={(e)=>e.code=="Enter"?searchProduct():null}/>
    <img onClick={searchProduct} height='20px' src="https://cdn-icons-png.flaticon.com/128/622/622669.png" alt="magnify-glass" />
    </div>
  )
}

export default Searchbar