import React from 'react'
import protect from './protetc.jpeg'

const Right = () => {
  return (
    <div className="right_buy">
    <img src={protect} alt="rightimg" />
    <div className="cost_right">
        <p>Your order is eligible for FREE Delivery. <br />
            <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
        <h3>Subtotal (1 items): <span style={{ fontWeight: "700" }}> ₹4000.00</span></h3>
        <button className="rightbuy_btn">Proceed to Buy</button>
        <div className="emi">
         {/*onClick={() => setVal(!val)}>*/}
            Emi available
            {/* {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
        </div>
        {/* // <span className={val ? "show" : "hide"}> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold,
        //     Jewelry, Gift cards and Amazon pay balance top up). Learn more</span> */}
    </div>
</div>
  )
}

export default Right