import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import Context from './components/context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </Context>
);

