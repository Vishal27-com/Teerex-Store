import React, { useContext } from 'react'
import FilterCard from './FilterCard'
import styles from "./Filter.module.css"
import { ProductContext } from '../../Context/ProductContext';
const AllFilter = ({colors,types}) => {
  const {
    productState:{color,gender,price,type,max_price},
    productDispatch,
    cartState: { products },
    cartDispatch,
  } = useContext(ProductContext);
  const colorFilterHandler=(e)=>{
    let filtered=color;
    if(e.target.checked){
     filtered.push(e.target.value);
    }
    else{
      filtered=filtered.filter((item)=>item!==e.target.value)
    }
    productDispatch({type:"BY_COLOR",payload:filtered})
  }
  const genderFilterHandler=(e)=>{
    let filtered=gender;
    if(e.target.checked){
     filtered.push(e.target.value);
    }
    else{
      filtered=filtered.filter((item)=>item!==e.target.value)
    }
    productDispatch({type:"BY_GENDER",payload:filtered})
  }
  const priceFilterHandler=(e)=>{
    let filtered=price;
    let set_price=0
    if(e.target.value==="0-300")set_price=300;
    if(e.target.value==="301-400")set_price=400;
    if(e.target.value==="above 400")set_price=401;
    if(e.target.checked){
     filtered.push(set_price);
    }
    else if(!e.target.checked){
      filtered=filtered.filter((item)=>item!==price)
    }
    let update_price=false;
    for(let i=0;i<filtered.length;i++){
      if(max_price<filtered[i])update_price=true;
    }
    if(update_price)productDispatch({type:"BY_MAX_PRICE",payload:set_price})
    productDispatch({type:"BY_PRICE",payload:filtered})
  }
  const typeFilterHandler=(e)=>{
    let filtered=type;
    if(e.target.checked){
     filtered.push(e.target.value);
    }
    else{
      filtered=filtered.filter((item)=>item!==e.target.value)
    }
    productDispatch({type:"BY_TYPE",payload:filtered})
  }
  return (
    <div>
      <div>
        <p className={styles.filterHead}>Filter By Colour</p>
        {
            colors.map((element,ind)=>
           <FilterCard 
           filterHandler={colorFilterHandler}
           key={ind} element={element} />
           )
        }
        <p className={styles.filterHead}>Filter By Gender</p>
        <FilterCard filterHandler={genderFilterHandler} element="Women" />
        <FilterCard filterHandler={genderFilterHandler}  element="Men" />
        <p className={styles.filterHead}>Filter By Price</p>
        <FilterCard filterHandler={priceFilterHandler}  element="0-300" />
        <FilterCard filterHandler={priceFilterHandler}  element="301-400" />
        <FilterCard filterHandler={priceFilterHandler}  element="above 400" />
        <p className={styles.filterHead}>Filter By Type</p>
        {
            types.map((element,ind)=>
           <FilterCard filterHandler={typeFilterHandler} key={ind} element={element} />
           )
        }
        
      </div>  
    </div>
  )
}

export default AllFilter