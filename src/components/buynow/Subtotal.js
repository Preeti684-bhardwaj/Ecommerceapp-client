import React, { useState, useEffect } from 'react';

const Subtotal = ({ items }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalAmount = () => {
      let totalPrice = 0;
      items.forEach(item => {
        totalPrice += item.price.cost;
      });
      setPrice(totalPrice);
    };

    totalAmount();
  }, [items]); // Include totalAmount in the dependency array

  return (
    <div className='sub_item'>
      <h3>Subtotal ({items.length} items):<strong style={{ fontWeight: "700", color: "#111" }}> ₹{price}.00</strong></h3>
    </div>
  );
};

export default Subtotal;
