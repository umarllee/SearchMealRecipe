import React from 'react'
import { Link } from "react-router-dom";
import logo from './meal.png'
import './navbar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

export default function Navbar() {

    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }
 
    let user = useSelector(selectUser);
    return (
        <div className="container">
 
            <Link to="/" className="logoCon">
                <img src={logo} alt="" className="logoImg" />
                <h1>HappyMeal</h1>
            </Link>


            <div className="login-con">
                <Link to="/" className="navLinks"><button className="homeContact"> Home </button> <i className="fa fa-home homeContactIcon"></i></Link>
                <Link to="/contact" className="navLinks"><button className="homeContact"> Contact </button> <i className="fa fa-phone homeContactIcon"></i> </Link>
                {user.loggedIn ? <button onClick={handleLogOut}> <i className="fa fa-sign-out"></i></button> : ""}
            </div>

        </div>
    );
}

