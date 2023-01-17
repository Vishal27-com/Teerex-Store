import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const {
    cartState: { cart },
  } = useContext(ProductContext);
  const [isOpen,setIsOpen]=useState(false);
  const openModal=()=>{
     setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={styles.navbar}>
        <div>
          <p className={styles.logo}>TeeRex Store</p>
        </div>
        <div className={styles.navlinkbox}>
          <Link to="/">
            <p>Products</p>
          </Link>
          <Link to="/cart">
            <div>
              <img
                height="30px"
                src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                alt="cart-icon"
              />
              <p>{cart.length}</p>
            </div>
          </Link>
        </div>

        <div className={styles.hamburger} onClick={openModal}>
         <div></div>
         <div></div>
         <div></div>
         {isOpen && <div id={styles.menu}>
          <Link to='/'><p>Products</p></Link>
          <Link to='/cart'><p>Cart</p></Link>
         </div>}
        </div>

      </div>
      <hr />
    </div>
  );
};

export default Navbar;
