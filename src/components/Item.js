import React, { useState } from "react";

function Item({ name, category }) {
  let [isAdd, setIsAdd] = useState(false);

  function handleAdd () {
    setIsAdd((isAdd) => !isAdd)
  }
  const cartAdd = isAdd ? "in-cart" : ""
  return (
    <li className={cartAdd}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>Add to Cart</button>
    </li>
  );
}

export default Item;
