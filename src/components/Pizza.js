import React from "react";
function Pizza({myPizza}) {
  const { name, ingredients, price, photoName} = myPizza;
  return (
    <>
      <div className="pizza">
        <img
          src={`${process.env.PUBLIC_URL}/${photoName}`}
          alt={name}
        ></img>
    <div>
       <h2>{name}</h2>
      <h4>{ingredients}</h4>
      <h4>{price}</h4>
    </div>
     

      </div>
    </>
  );
}

export default Pizza;
