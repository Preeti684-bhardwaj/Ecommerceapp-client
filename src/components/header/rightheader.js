import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { Logincontext } from '../context/Context';
import "./rightheader.css";
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SettingsIcon from '@mui/icons-material/Settings';

const Rightheader = ({logclose, logoutuser}) => {
    const { account } = useContext(Logincontext);
    const fnameInitial = account?.fname?.charAt(0).toUpperCase() || '';

    return (
        <div className="rightheader">
            <div className="right_nav">
                {account ? <Avatar className="avtar2" id="basic-button">{fnameInitial}</Avatar> : <Avatar className='avatar'></Avatar>}
                {account ? <h3>Hello, {account.fname.toUpperCase()}😊</h3> : ""}
            </div>
            <div className="nav_btn" onClick={()=> logclose()}>
                <NavLink to="/"><HomeIcon/>Home</NavLink>
                <NavLink to="/"><ShoppingBagIcon/>Shop By Category</NavLink>
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 10 }}>< LocalOfferIcon/>Today's Deal</NavLink>
                {account ? <NavLink to="/buynow"><ShoppingCartCheckoutIcon/>Your Order</NavLink> : <NavLink to="/login">Your Order</NavLink>}
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <div className="flag">
                    <NavLink to="/" style={{ marginTop: 14 }}><SettingsIcon/>Settings</NavLink>
                </div>
                {account ? (
                    <div className="flag">
                        <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                        <h3 onClick={() => logoutuser()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                    </div>
                ) : (
                    <NavLink to="/login">Sign In</NavLink>
                )}
            </div>
        </div>
    );
};

export default Rightheader;
