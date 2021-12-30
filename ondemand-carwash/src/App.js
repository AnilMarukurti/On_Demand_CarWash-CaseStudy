import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './loginSignupPage/Navbar';
import Login from './loginSignupPage/Login';
import Payment from './loginSignupPage/Payment';
import Home from './loginSignupPage/Home';
import Order from './loginSignupPage/Order';
import Appointment from './loginSignupPage/Appointment';
import Bookedappoinments from './loginSignupPage/Bookedappoinments';
import {ContextProvider} from './loginSignupPage/Context';
import Wash from './loginSignupPage/Wash';
function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <ContextProvider>
        <Routes>
          <Route path = "/"exact element = {<Home />}/>
          <Route path = "/login" exact element = {<Login/>}/>
          <Route path = "/order" exact element = {<Order/>}/>
          <Route path="/appointment" exact element = {<Appointment/>}/>
          <Route path="/payment" exact element = {<Payment/> } />
          <Route path="/bookedappointments" exact element = {<Bookedappoinments/>}/>
          <Route path="/washer" exact element = {<Wash/>}/>
         
          
        </Routes>
        </ContextProvider>
      </Router>
      
    </div>
  );
}

export default App; 



/*
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Order from './orderdetails/Order';

const App = () => {
  return (
    <div>
      <Order/>
    </div>
  )
}

export default App */

/*
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import WasherNavbar from './Washer/WasherNavbar'
const App = () => {
  return (
    <div>
      <WasherNavbar />
    </div>
  )
}

export default App */
