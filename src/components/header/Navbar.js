import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logoimg.png'
import { Logincontext } from '../context/Context';
import Rightheader from './rightheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useSelector} from 'react-redux'


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const [text,setText]=useState("");
  console.log(text)
  const [liopen,setLiopen]=useState(true);
  const { products } = useSelector(state => state.getproductsdata);

  const [dropen, setDropen] = useState(false);

  const { account, setAccount } = useContext(Logincontext);
  const history=useNavigate()
  const cartItemCount = account?.carts?.length || 0;
  const fnameInitial = account?.fname?.charAt(0).toUpperCase() || '';
// eslint-disable-next-line
  const getdetailsvaliduser = async () => {
    try {
      const res = await fetch('/validuser', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (res.status === 201) {
        const data = await res.json();
        setAccount(data);
      } else {
        console.log('First login');
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };

  useEffect(() => {
    getdetailsvaliduser();
  }, [getdetailsvaliduser]);
   

  const getText=(items)=>{
    setText(items);
    setLiopen(false)
  }

  const handelopen = () => {
    setDropen(true);
  }

  const handleClosedr = () => {
    setDropen(false)
  }


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
        // eslint-disable-next-line
        const data2 = await res.json();
        toast.success('Logout Successfully done 😃!', {
          position: 'top-left'})
        setAccount(false);
        history("/")
      } else {
        console.log('data invalid');
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };

  return (
    <header>
      <nav>
        <div className='left'>
          <IconButton className="hamburgur" onClick={handelopen} >
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          {/* here define the right header */}
          <Drawer open={dropen} onClose={handleClosedr}>
            <Rightheader logclose={handleClosedr} logoutuser={logoutuser}/>
          </Drawer>
          <div className='navlogo'>
            <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
          </div>
          <div className='nav_searchbar'>
            <input type='text' name=' ' onChange={(e)=>getText(e.target.value)} placeholder="Search Your Product Here" id=' ' />
            <div className='search_icon'>
              <SearchIcon id='search' />
            </div>

             {/*search filter */}
             {
              text && 
              <List className='extrasearch' hidden = {liopen}>
                {
                  products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <ListItem>
                      <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setLiopen(true)}>
                      {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))
                }
              </List>
             }


          </div>
        </div>
        <div className='right'>
          <div className='nav_btn'>
            <NavLink to="/login">Sign In</NavLink>
          </div>
          <div className='cart_btn'>
            {
              account ? <NavLink to="/buynow">
                <Badge badgeContent={cartItemCount} color='primary'>
                  <ShoppingCartIcon id='icon' />
                </Badge>
              </NavLink> : <NavLink to="/login">
                <Badge badgeContent={0} color='primary'>
                  <ShoppingCartIcon id='icon' />
                </Badge>
              </NavLink>
            }
            <ToastContainer/>
            <p>Cart</p>
          </div>
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
            
            <MenuItem onClick={handleClose}><NavLink to="/login"><AccountCircleIcon style={{fontSize:20,marginRight:9}}/>My account</NavLink></MenuItem>
            {
              account ?  <MenuItem onClick={logoutuser}><LogoutIcon style={{fontSize:20,marginRight:9}}/>Logout</MenuItem> : ""
            }
           
          </Menu>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
