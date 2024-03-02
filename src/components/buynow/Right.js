// Right.js
import React, { useState, useEffect } from 'react';
import protect from './protetc.jpeg';

const Right = ({ items }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [items]);

  const totalAmount = () => {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price.cost;
    });
    setPrice(totalPrice);
  };

  return (
    <div className="right_buy">
      <img src={protect} alt="rightimg" />
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery. <br />
          <span style={{ color: "#565959" }}> Select this option at checkout. Details</span>
        </p>
        <h3>Subtotal ({items.length} items): <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
        <button className="rightbuy_btn">Proceed to Buy</button>
        <div className="emi">
          Emi available
        </div>
      </div>
    </div>
  );
};

export default Right;
