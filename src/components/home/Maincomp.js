import React, { useEffect } from 'react';
import Banner from './Banner';
import './home.css';
import Slide from './Slide';
import arrival from './arrival.jpeg';
import { getProducts } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from '@mui/material';

const Maincomp = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className='home_section'>
        <div className='banner_part'>
          <Banner />
        </div>
        <div className='slide_part'>
          <div className='left_slide'>
            <Slide title='Deal Of The Day' products={products} />
          </div>
          <div className='right_slide'>
            <h4>New Arrivals</h4>
            <img src={arrival} alt='' />
            {/* Use a button instead of an anchor element */}
            <button onClick={() => window.scrollTo(0, 0)}>See More</button>
          </div>
        </div>
        <Slide title='Low Price Store' products={products} />
        <div className='center_img'>
          <img src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' alt='' />
        </div>
        <Slide title='Bestselling Product' products={products} />
        <Slide title='Upto 80% Off' products={products} />
      </div>

      <Divider />
    </>
  );
};

export default Maincomp;
