import Navbar from './components/header/Navbar'
import Newnavbar from './components/newnavbar/newnavbar'
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer'
import Signup from './components/signupSign/SignUp';
import Sign_in from './components/signupSign/SignIn';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Navbar />
            <Newnavbar />
            <Routes>
              <Route exact path="/" element={<Maincomp />} />

              <Route exact path="/register" element={<Signup />} />

              <Route exact path="/login" element={<Sign_in />} />

              <Route exact path="/getproductsone/:id" element={<Cart />} />

              <Route exact path="/buynow" element={<Buynow />} />

            </Routes>
            <Footer />
          </>
        ) : (
          <div className='circle'>
            <CircularProgress />
            <h2>Loading....</h2>
          </div>
        )
      }
    </>
  );
}

export default App;