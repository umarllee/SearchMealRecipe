import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './layouts/Navbar'
import MainPage from './pages/MainPage'
import Contact from './pages/Contact'
import RegisterPage from './pages/Register'
import Login from './pages/Login'
import LoaderPage from './components/searchLoader'
import {selectUser} from './features/userSlice'
import api from './api'


export default function App () {
 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

   let user = useSelector(selectUser);

    return ( 
    <div>

      {!isLoading ? <LoaderPage/> : 
           (
           <BrowserRouter>
             <Navbar/>
             <Routes>
               <Route path='/' element={user.loggedIn ? <MainPage/> : <RegisterPage/> }/>
               <Route path='/contact' element={<Contact/> }/>
               <Route path='/signIn' element={user.loggedIn ? <MainPage/> : <Login/> }/>
             </Routes>
           </BrowserRouter>
           )
        }
      </div>
    );
}
