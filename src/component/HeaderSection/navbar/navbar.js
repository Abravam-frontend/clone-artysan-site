import React, { useState } from 'react';
import './navbar.css';
import rasm from './logo.png';

const Navbar = () => {
  const [noactive, active] = useState(false)
  window.addEventListener("scroll", function(){
    if(this.window.scrollY>100){
      active(false);
    }else{
      active(true);
    }
  })
  return (  
    <div>
      <nav className="allnav navbar navbar-expand-lg mt-2 bg-white container">
          <div className={noactive ? "all_nav_items":"activeNav"}>
            <a className="" href="nav"><img src={rasm} alt="#" className='logo_image' /></a>
            <div className="nav_list">
              <ul className="nav_list_items">
                <li className="nav-item">
                  <a className="nav-link text-black" aria-current="page" href="#benefits">Benefits</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#how_works">How it works</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#services">Services</a>
                </li><li className="nav-item">
                  <a className="nav-link text-black" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#faq">FAQs</a>
                </li>
              </ul>
            </div>
            <button className='btn login_button'>Login</button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
