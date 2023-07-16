import React from 'react';
import './buynow.css';
import { Divider } from '@mui/material';
import Option from './option'
import Subtotal from './Subtotal';
import Right from './Right';
import quality from './qualityimg.png'
const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select All Items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                <div className='item_container'>
                    <img src='' alt=''/>
                    <div className='item_details'>
                        <h3> </h3>
                        <h3> </h3>
                        <h3 className='differentprice'>  </h3>
                        <p className='unusual'> </p>
                        <p> </p>
                        <img src={quality} alt=''/>
                        <Option/>
                    </div>
                    <h3 className='item_price'>4000</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default Buynow