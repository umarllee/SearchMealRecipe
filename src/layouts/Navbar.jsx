import React from 'react'
import './navbar.css'

export default function Navbar() {

    return (
        <div className="container">
            <h1>HappyMeal</h1>

            <div className="login-con">
                <button> Sign in </button>
                <button> Sign up </button>
            </div>

        </div>
    );
}

