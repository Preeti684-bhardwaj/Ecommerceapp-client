import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avtar from '@mui/material/Avatar';
import logo from './logoimg.png'
const Navbar = () => {
  return (
    <header>
        <nav>
           <div className='left'>
            <div className='navlogo'>
            <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                </div>
           <div className='nav_searchbar'>
            <input type='text' name=' ' id=' '/>
            <div className='search_icon'>
              <SearchIcon id='search'/>
            </div>
           </div>
           </div>
           <div className='right'>
            <div className='nav_btn'>
            <NavLink to="/login">Sign In</NavLink>
            </div>
            <div className='cart_btn'>
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartIcon id='icon'/>
              </Badge>
              <p>Cart</p>
            </div>
            <Avtar className='avatar'/>
           </div>
        </nav>
    </header>
  )
}

export default Navbar
