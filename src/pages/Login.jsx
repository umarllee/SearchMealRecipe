import React, { useState } from 'react'
import './register.css'
import api from '../api'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


export default function Register() {

    const [psw, setPsw] = useState('');
    const [validPsw, setvalidPsw] = useState('');

    const dispatch = useDispatch();

    const handleSignIn = (e) => {
        e.preventDefault();

        api.getInfo().then(data => {

            if (data.some(t => t.userPassword === psw)) {
                setvalidPsw("");
                dispatch(login({
                    loggedIn: true
                }))
            }

            else {
                setvalidPsw("Password is wrong!");

                dispatch(login({
                    loggedIn: false
                }));
            }

        });

    }

    return (
        <div className="regCcontainer">

            <form className="formCon">
                <div className="formInputsCon">
                    <h2 className="registerTitle">Log in</h2>
                    <div className="inputsCon">
                        <label htmlFor="exampleInputPassword1" className="input-label">Email</label>
                        <input
                            type="email"
                            className="inputs"
                            id="exampleInputPassword1"
                        />

                    </div>

                    <div className="inputsCon">
                        <label htmlFor="exampleInputPassword2" className="input-label">Password</label>
                        <input
                            type="password"
                            className="inputs"
                            id="exampleInputPassword2"
                            value={psw}
                            onChange={e => setPsw(e.target.value)} />

                        <span>{validPsw}</span>
                    </div>
                    <button type="submit" className="registerSubmit" onClick={handleSignIn}>Sign in</button>

                    <div className="alreadyRegContainer">
                        Don't have an account?
                        <Link to="/" className="alreadyRegContainerLink">Sign up</Link>
                    </div>
                </div>
            </form>



        </div>
    );
}

