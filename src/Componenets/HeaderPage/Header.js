import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import logo from './Logo.png'
import Home from '../HomePage/Home'
import Coffe from '../CoffePage/Coffe';
import Bakery from '../BakeryPage/Bakery';
import Shop from '../ShopPage/Shop';
import Login from '../ContactPage/Login';
import PaymentSuccessPage from '../ShopPage/PaymentPage'
import './Header.css';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <header id="header">
             <Link to='/'  className='box-logo'>
             <img src={logo} className='Logo' />
            <br></br>
            <h6>Coffee</h6>
             </Link>
          <nav  >
            <ul id='navbar'>
              <li>

                <Link to='/' className='Links' ><span>Home</span></Link>
              </li>
              <li>
                <Link to='/coffee' className='Links' id='hover'>Coffee</Link> {/* Assurez-vous que les liens pointent vers les bons chemins */}
              </li>
              <li>
                <Link to='/bakery' className='Links' id='hover'>Bakery</Link>
              </li>
              <li>
                <Link to='/shop' className='Links' id='hover'>Shop
                
           </Link>
              </li>
              <li>
                <Link to='/login' className='Links' id='hover'>
                  LogIn
                </Link>
              </li>
            </ul>
          </nav>

         <button className='contact'>Contact Us</button>
         <div className='raiting-left'>
         <FaRegUser className='rating'/>
         <FaSearch   className='rating'/>
         <FaRegHeart  className='rating' />
         </div>
          <div id='version-mobile'>
          <LuMenu id='menu-icon' onClick={toggleMenu} />
          {/* Affiche le menu mobile si isMenuOpen est vrai */}
          {isMenuOpen && (
            <div className="menu-mobile">
               <ul id=''>
              <li>

                <Link to='/' className='Links' ><span>Home</span></Link>
              </li>
              <li>
                <Link to='/coffee' className='Links' id='hover'>Coffee</Link>
              </li>
              <li>
                <Link to='/bakery' className='Links' id='hover'>Bakery</Link>
              </li>
              <li>
                <Link to='/shop' className='Links' id='hover'>Shop</Link>
              </li>
              <li>
                <Link to='/login' className='Links' id='hover'>
                  LogIn
                </Link>
              </li>
            </ul>
             <IoMdClose className="close-icon" onClick={closeMenu}/>
            </div>
          
          )}
        
          </div>


        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coffee' element={<Coffe/>} />
          <Route path='/bakery' element={<Bakery />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/payment-success" element={<PaymentSuccessPage/>} />
         
          <Route path='/login' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;