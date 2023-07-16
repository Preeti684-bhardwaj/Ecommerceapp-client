import React from 'react'
import logo from '../header/logoimg.png'
import './footer.css'
const footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <footer>
       <div className='footer_container'>
        <div className='footer_detail_one'>
            <h3>Get To Know</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>We Cares</p>
        </div>
        <div className='footer_detail_one'>
            <h3>Contact With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className='footer_detail_one'>
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Returns & Replacements</p>
            <p>Help</p>
        </div>
       </div>
       <div className='lastdetails'>
        <img src={logo} alt=''/>
        <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
       </div>
    </footer>
  )
}

export default footer