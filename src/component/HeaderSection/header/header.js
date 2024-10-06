import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <section className='container main_header text-center'>
        <div>
          <h1 className='framer fw-bold lh-sm'>
            Award-winning design partner for <br/> your business, on demand
          </h1>
          <p className='framer_title mt-4'>
            All your design needs streamlined into one single flat monthly membership: <br/> 
            Brands, Websites, Products and everything in between — it's kinda magic.
          </p>
          <div className='header_button'>
            <div className='see_button'>
              <a href='see'>See plans</a>
            </div>
          </div>
          <p className='framer_text mt-4'><i className="fa-regular fa-circle-dot fa-fade"></i>Available</p>
        </div>
      </section>
    </div>
  )
}

export default Header
