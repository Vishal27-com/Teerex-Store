import React from 'react'
import styles from "./CartCard.module.css";
const CartCard = ({id,price,image,name,quantity,changeQuantity,removeItem}) => {
  return (
    <div className={styles.cartCard}>
        <img height='60px' src={image} alt="product-image" />
        <p>{name}</p>
        <p>₹ {price}</p>
        <div className={styles.quantityButton}>
        <button onClick={()=>changeQuantity(id,-1)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=>changeQuantity(id,1)}>+</button>
        </div>
        <img onClick={()=>removeItem(id)} height='20px' src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="dustbin-image" />
    </div>
  )
}

export default CartCard