import React, { useContext } from 'react'
import CartCard from '../../Components/CartCard/CartCard';
import { ProductContext } from '../../Context/ProductContext';
import styles from "./Cart.module.css"
const Cart = () => {
  const {cartState:{cart},cartDispatch}=useContext(ProductContext);  
  const changeQuantity=(id,num)=>{
   cartDispatch({type:"CHANGE_QUANTITY",payload:{id,num}});
  }
  const removeItem=(id)=>{
   cartDispatch({type:"REMOVE_FROM_CART",payload:{id}});
  }
  return (
    <div className={styles.cart} >
      {
        cart.length!==0?cart.map((item)=>
        <CartCard 
        key={item.id}
        id={item.id}
        image={item.imageURL}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        changeQuantity={changeQuantity}
        removeItem={removeItem}
        />    
        ):<h1>No Item in Cart</h1>
      }
      <h1>Total Amount:
       {cart.reduce((accumulator,current)=>{
        return accumulator+(current.price*current.quantity)
       },0)}

      </h1>
    </div>
  )
}

export default Cart