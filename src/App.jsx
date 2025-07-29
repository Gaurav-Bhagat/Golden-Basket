//import { Router } from 'express'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar></Navbar>
      <SearchBar/>
      
      <Routes>
      <Route path ='/' element={<Home></Home>}></Route>
      <Route path ='/collection' element={<Collection></Collection>}></Route>
      <Route path ='/cart' element={<Cart></Cart>}></Route>
      <Route path ='/about' element={<About></About>}></Route>
      <Route path ='/product/:productId' element={<Product></Product>}></Route>
      <Route path ='/contact' element={<Contact></Contact>}></Route>
      <Route path ='/login' element={<Login></Login>}></Route>
      <Route path ='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
      <Route path ='/orders' element={<Orders></Orders>}></Route>
      
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
