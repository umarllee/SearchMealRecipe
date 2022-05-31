import React, {
  Component
} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './layouts/Navbar'
import MainPage from './pages/MainPage'

import LoaderPage from './components/searchLoader'


export default class App extends Component {
  state = {
    isLoading: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: true
      })
    }, 2000);
  }

  render() {
    return ( 
    <div>
      
     

      {!this.state.isLoading ? <LoaderPage/> : 
           (
           <BrowserRouter>
             <Navbar/>
             
             <Routes>
               <Route path='/' element={<MainPage/> }/>
             </Routes>
           </BrowserRouter>
           )
        }
      </div>
    );
  }
}