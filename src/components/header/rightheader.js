import React from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { NavLink , useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Logincontext } from '../context/Context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./rightheader.css";
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Rightheader = ({logclose}) => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }


    const { account, setAccount } = useContext(Logincontext);
    const history=useNavigate()
    const fnameInitial = account?.fname?.charAt(0).toUpperCase() || '';
    


    
  const logoutuser = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (res.status === 201) {
        const data2 = await res.json();
        toast.success('Logout Successfully done 😃!', {
          position: 'top-right'})
        setAccount(false);
        history("/")
      } else {
        console.log('data invalid');
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };


//  this is left drawer bt name is right header

    return (
        <div className="rightheader">
            <div className="right_nav">
             <ToastContainer/>
            {
            account ? <Avatar className="avtar2" id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} >{fnameInitial}</Avatar> :
              <Avatar className="avtar" id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}></Avatar>
          }

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            
            <MenuItem onClick={()=> logclose()}><NavLink to="/login"><AccountCircleIcon style={{fontSize:20,marginRight:9}}/>My account</NavLink></MenuItem>
            {
              account ?  <MenuItem onClick={logoutuser}><LogoutIcon style={{fontSize:20,marginRight:9}}/>Logout</MenuItem> : ""
            }
           
          </Menu>

                {account ? <h3>Hello, {account.fname.toUpperCase()}😊</h3> : ""}
            </div>
            <div className="nav_btn" onClick={()=> logclose()}>
                <NavLink to="/"><HomeIcon/>Home</NavLink>
                <NavLink to="/"><ShoppingBagIcon/>Shop By Category</NavLink>
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 10 }}>< LocalOfferIcon/>Today's Deal</NavLink>
                {
                    account ? <NavLink to="/buynow"><ShoppingCartCheckoutIcon/>Your Order</NavLink> : <NavLink to="/login">Your Order</NavLink>
                }
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <div className="flag">
                    <NavLink to="/" style={{ marginTop: 14 }}><SettingsIcon/>Settings</NavLink>
                    {/* <img src="" alt="india flag" style={{ width: 35, marginLeft: 10 }} /> */}
                </div>

                {/* {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={() => userlog()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                        </div>
                        : <NavLink to="/login">Sign in</NavLink>
                } */}


            </div>
        </div>
    )
}

export default Rightheader
