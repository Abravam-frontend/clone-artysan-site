import React from 'react';
import './images_section.css'
import rasm1 from './first.png';
import rasm2 from './second.png';
import rasm3 from './third.png';
import rasm4 from './fourth.png';

const Images_section = () => {
  return (
    <div>
      <div className='container rasmlar'>
        <img src={rasm3} alt='#'/>
        <img src={rasm2} alt='#'/>
        <img src={rasm1} alt='#'/>
        <img src={rasm4} alt='#'/>
      </div>
    </div>
  )
}

export default Images_section
