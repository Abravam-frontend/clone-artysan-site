import React from 'react';
import '../BenefitsSection/benefits.css';
import './services.css';
import ser_first_img from './services images/sfirst.png';
import ser_second_img from './services images/ssecond.png';
import ser_third_img from './services images/sthird.png';
import ser_fourth_img from './services images/sfourth.png';
import ser_fifth_img from './services images/sfifth.png';
import ser_sixth_img from './services images/ssixth.png';

const Services = () => {
  return (
    <div className='container' id='services'> 
        <div className='services_items'>
            <div className='subtitle_items'>
                <p className='subtitle_text'>Services</p>
                <h2 className='title_text'>If you can dream it, we can design it</h2>
                <p className='comment_text'>Logos, websites, interfaces and everything you need. We've got your back.</p>
            </div>
            <div className='services_other_items'>
                <div className='services_item'>
                    <p><i class="fa-solid fa-pen-nib"></i></p>
                    <p>Logos</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-book"></i></p>
                    <p>Brand guides</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-regular fa-image"></i></p>
                    <p>Graphic assets</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-chalkboard"></i></p>
                    <p>Pitch decks</p>  
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-paper-plane"></i></p>
                    <p>Landing pages</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-chalkboard-user"></i></p>
                    <p>Websites</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-pen"></i></p>
                    <p>Copywriting</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-brands fa-webflow"></i></p>
                    <p>Webflow</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-regular fa-object-ungroup"></i></p>
                    <p>Design systems</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-mobile"></i></p>
                    <p>Mobile apps</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-list"></i></p>
                    <p>Product UI/UX</p>
                </div>
                <div className='services_item'>
                    <p><i class="fa-solid fa-arrow-pointer"></i></p>
                    <p>Prototypes</p>
                </div>
                <div className='empty_cell'></div>
                <div className='empty_cell'></div>
                <div className='empty_cell'></div>
                <div className='empty_cell'></div>
            </div>
            <div className='services_image_items'>
                <img src={ser_first_img} alt="#" />
                <img src={ser_second_img} alt="#" />
                <img src={ser_third_img} alt="#" />
                <img src={ser_fourth_img} alt="#" />
                <img src={ser_fifth_img} alt="#" />
                <img src={ser_sixth_img} alt="#" />
            </div>
        </div>
    </div>
  )
}

export default Services
