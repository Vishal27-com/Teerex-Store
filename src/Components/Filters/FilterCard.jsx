import React from 'react'
import styles from "./Filter.module.css"
const FilterCard = ({element,filterHandler}) => {
  return (
    <div className={styles.filterCard}>
    <input type="checkbox" value={element} onClick={filterHandler} />
    <p>{element}</p>
     </div>
  )
}

export default FilterCard