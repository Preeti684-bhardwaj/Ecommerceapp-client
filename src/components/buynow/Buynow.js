// Buynow.js
import React, { useState, useEffect } from 'react';
import './buynow.css';
import { Divider } from '@mui/material';
import Option from './option';
import Subtotal from './Subtotal';
import Right from './Right';
import quality from './qualityimg.png';

const Buynow = () => {
  const [cartdata, setCartdata] = useState([]);

  useEffect(() => {
    getdatabuy();
  }, []);

  const getdatabuy = async () => {
    try {
      const res = await fetch("https://ecommerceapp-server-ecru.vercel.app/cartdetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        // credentials: "include"
      });
      const data = await res.json();
      if (res.status === 200) {
        setCartdata(data.carts);
      } else {
        // console.error("Failed to fetch cart data:", data.message);
      }
    } catch (error) {
      // console.error("Error fetching cart data:", error.message);
    }
  };

  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
          <h1>Shopping Cart</h1>
          <p>Select All Items</p>
          <span className='leftbuyprice'>Price</span>
          <Divider />

          {cartdata.length > 0 && cartdata.map((e, k) => (
            <React.Fragment key={k}>
              <div className='item_container'>
                <img src={e.detailUrl} alt='' />
                <div className='item_details'>
                  <h3>{e.title.longTitle}</h3>
                  <h3>{e.title.shortTitle}</h3>
                  <h3 className="diffrentprice">₹{e.price.cost}.00</h3>
                  <p className="unusuall">Usually dispatched in 8 days.</p>
                  <p>Eligible for FREE Shipping</p>
                  <img src={quality} alt='' />
                  <Option deletedata={e.id} get={getdatabuy} />
                </div>
                <h3 className='item_price'>₹{e.price.cost}.00</h3>
              </div>
              <Divider />
            </React.Fragment>
          ))}
          <Subtotal items={cartdata} />
        </div>
        <Right items={cartdata} />
      </div>
    </div>
  );
};

export default Buynow;
