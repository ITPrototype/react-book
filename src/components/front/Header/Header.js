import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { Context } from "../../../index";
import "./Header.css"
import {useAuthState}from'react-firebase-hooks/auth'
const Header = () => {
    const{auth}=useContext(Context)
    const[user]=useAuthState(auth)
    
    return(
        <div className="header">
            <div className="m-cont-head">
                <h1>
                    <Link to="/" className="logo">
                        Books Shop
                    </Link>
                </h1>
                <div className="mobile-btn">
                    <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                    <ul>
                        <li>
                            <Link to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/cart" className="cart"><i className="fas fa-shopping-cart"/> Cart</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {
                                user ?
                                <button className="signOutbtn" onClick={()=>auth.signOut() && localStorage.clear()}><i className="fa-solid fa-right-from-bracket"></i> Sign Out</button>
                                :
                                <Link to="/signup"><i className="fa-solid fa-user"></i> Sign Up</Link>
                            }
                        </li>
                    </ul>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <h4>Heasdasdasda</h4>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>
                     </div>
                 </nav>
                </div>
            </div>
            
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i className="fas fa-shopping-cart"/> Cart
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        {
                            user ?
                            <button className="signOutbtn" onClick={()=>auth.signOut() && localStorage.clear()}><i className="fa-solid fa-right-from-bracket"></i> Sign Out</button>
                            :
                            <Link to="/signup"><i className="fa-solid fa-user"></i> Sign Up</Link>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header