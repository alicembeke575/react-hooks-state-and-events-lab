import React, { useState } from "react";

function Item({ name, category }) {
  const [isIncart, setIsIncart] = useState(false);

  function handleAddToCartClick() {
    setIsIncart((isInCart) => !isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isIncart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"}
        Cart
      </button>
    </li>
  );
}

export default Item;