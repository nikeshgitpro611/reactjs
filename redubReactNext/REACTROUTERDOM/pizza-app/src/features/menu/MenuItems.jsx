// import React from 'react'

import { formatCurrency } from "../../utils/helpers";

const MenuItems = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div className="">
        <p>{name}</p>
        <p>{ingredients.join(",")}</p>
        <div className="">
        {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItems;
