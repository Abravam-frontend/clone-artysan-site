import React from 'react';
import './partner.css';
import par1 from './partner-images/hundred.svg';
import par2 from './partner-images/opus.png';
import par3 from './partner-images/sage.png';
import par5 from './partner-images/ait.png';
import par6 from './partner-images/futrli.png';
import par7 from './partner-images/work.svg';



const Partner = () => {
  return (
    <div>
      <div className='container partner_items'>
        <div className='partner_text'><p>Trusted by industry Leaders worldwide</p></div>
        <div className='partner_item'>
            <img src={par1} alt='#'/>
            <img src={par6} alt='#'/>
            <img src={par3} alt='#'/>
            <img src={par5} alt='#'/>
            <img src={par2} alt='#'/>
            <img src={par7} alt='#'/>
        </div>
      </div>
    </div>
  )
}

export default Partner
