import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom';
import AboutUs from './components/about';
import IndexSam from './components/indexsam';
import Pricing from './components/pricing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <React.Fragment>
      <Navbar></Navbar>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/index" component={IndexSam}></Route>
        <Route path="/pricing" component={Pricing}></Route>
    </React.Fragment>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
