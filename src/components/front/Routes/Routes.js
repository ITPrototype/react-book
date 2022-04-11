import React from 'react';
import {Route,Routes} from "react-router-dom";
import Data from "../../back/Data"
import Signup from '../Signup/Signup';
import Cart from "../cart/Cart"
import Footer from '../footer/footer';
import Header from '../Header/Header';
import './Back.css'

const Routees = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Data/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
export default Routees;