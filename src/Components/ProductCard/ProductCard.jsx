import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext';
import styles from "./ProductCard.module.css"

const ProductCard = ({data}) => {
  const {productState,cartState:{cart},cartDispatch}=useContext(ProductContext);  
  
  const addToCart=(data)=>{
    cartDispatch({type:"ADD_TO_CART",payload:data})
    alert("Added to cart");
  
  }
  return (
    <div className={styles.productCard}>
       <img width='200px' src={data.imageURL} alt="Product-Image" />
       <p>{data.name}</p>
       <p>{data.color}</p>
       <div className={styles.priceAndButtonBox}>
       <p>₹ {data.price}</p>
       <button onClick={()=>addToCart(data)}>Add To Cart</button>
       </div>
    </div>
  )
}

export default ProductCard