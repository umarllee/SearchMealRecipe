import React, { useState } from 'react'
import './register.css'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { login } from '../features/userSlice'
import api from '../api'


export default function Register() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [validUname, setValidUname] = useState('');
    const [validEmail, setvalidEmail] = useState('');
    const [validPsw, setvalidPsw] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        api.getInfo().then(data => {

            if (data.some(t => t.userEmail === email)) {
                setErrMsg("Alreay have account!");

                dispatch(login({
                    loggedIn: false
                }))
            }

            else {
                if (userName.length < 5) {
                    setValidUname("Username is must be at least 5 letters long ")
                }

                if (psw.length < 8) {
                    setvalidPsw("Password is must be at least 8 letters long")
                }

                else {
                    setValidUname("");
                    setvalidPsw("")
                    setErrMsg("");
                    api.save({
                        name: userName,
                        email: email,
                        password: psw
                    });

                    dispatch(login({
                        loggedIn: true
                    }));
                }
            }
        })
    }

    return (
        <div className="regCcontainer">

            <form className="formCon" onSubmit={e => handleSubmit(e)}>
                <div className="formInputsCon">
                    <h2 className="registerTitle">Register</h2>
                    <div className="inputsCon">
                        <label htmlFor="userNameInput" className="input-label">Username</label>
                        <input
                            type="text"
                            className="inputs"
                            id="userNameInput"
                            value={userName}
                            onChange={e => setUserName(e.target.value)} />

                        <span>{validUname}</span>
                    </div>

                    <div className="inputsCon">
                        <label htmlFor="exampleInputPassword1" className="input-label">Email</label>
                        <input
                            type="email"
                            className="inputs"
                            id="exampleInputPassword1"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />

                    </div>

                    <h5>{errMsg}</h5>

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
                    <button type="submit" className="registerSubmit">Sign up</button>



                    <div className="alreadyRegContainer">
                        Already registered?
                        <Link to="/signIn" className="alreadyRegContainerLink">Sign in</Link>
                    </div>
                </div>
            </form>

        </div>
    );
}
