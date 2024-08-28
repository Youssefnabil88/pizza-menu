import React from "react";
function Pizza({ myPizza }) {
  const { name, ingredients, price, photoName } = myPizza;
  return (
    <>
      <li className="pizza">
        <img src={`${process.env.PUBLIC_URL}/${photoName}`} alt={name}></img>
        <div>
          <h3>{name}</h3>
          <h4>{ingredients}</h4>
          <h4>{price}$</h4>
        </div>
      </li>
    </>
  );
}

export default Pizza;
