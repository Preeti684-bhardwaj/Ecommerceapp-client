import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../header/logoimg.png';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { Logincontext } from '../context/Context';

const SignIn = () => {
  const history = useNavigate();
  const [logdata, setLogData] = useState({
    email: '',
    password: ''
  });

  const { setAccount } = useContext(Logincontext);

  const addData = (e) => {
    const { name, value } = e.target;

    setLogData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        console.log('Invalid details');
        toast.error('Invalid Details 👎!', {
          position: 'top-right'
        });
      } else {
        // Set token in cookies
        document.cookie = `token=${data.token}; path=/;`;
        setAccount(data.token);
        setLogData({ email: '', password: '' });
        toast.success('Login Successfully done 😃!', {
          position: 'top-right'
        });

        // Redirect to the desired page
        history('/'); // Replace '/dashboard' with the appropriate route
      }
    } catch (error) {
      console.log('Login page error: ' + error.message);
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={addData}
                value={logdata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={addData}
                value={logdata.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <button type="submit" className="signin_btn" onClick={sendData}>
              Continue
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <p>New to Our Site?</p>
          <button>
            <NavLink to="/register">Create your Amazon Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
