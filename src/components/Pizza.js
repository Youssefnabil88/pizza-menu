import React from "react";
function Pizza({ myPizza }) {
  const { name, ingredients, price, photoName, soldOut} = myPizza;

  // if(soldOut) return <div className="pizza">
  //   <img  className="pizza.sold-out" src={`${process.env.PUBLIC_URL}/${photoName}`} alt={name}></img> 
  // </div>
  const soldOutClass= soldOut? "sold-out": "";

  return (
    <>
    
      <li className={`pizza ${soldOutClass}`} >
        <img  src={`${process.env.PUBLIC_URL}/${photoName}`} alt={name}></img>
        <div>
          <h3>{name}</h3>
          <h4>{ingredients}</h4>
          <h4>{soldOut? "SOLD OUT": `${price}$`} </h4>
        </div>
      </li>
    </>
  );
}

export default Pizza;
