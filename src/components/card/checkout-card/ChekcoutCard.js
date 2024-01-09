import React from 'react';
import './ChekcoutCard.css';
const ChekcoutCard = (props) => {
  return (
    <div className="check-container">
      <div className="check-imgContainer">
        <img className="check-img" src={props.img} alt={props.productName} />
      </div>
      <div className="check-info">
        <p className="name">{props.productName}</p>
        <p className="quantity ">
          <b>{props.item.quantity}x</b> 
        </p>
        <p className="price ">
          <b>{props.price}$</b> 
        </p>
      </div>
    </div>
  );
};

export default ChekcoutCard;
