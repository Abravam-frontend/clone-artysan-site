import React from 'react';
import './howwork.css';
import '../BenefitsSection/benefits.css';
import hwork_rasm from './hwork-image.png';


const HowWork = () => {
  return (
    <div className='container' id='how_works'>
        <div className='howworks_items'>
            <div className='subtitle_items'>
                <p className='subtitle_text'>How it works</p>
                <h2 className='title_text'>The superpower of Simplicity</h2>
                <p className='comment_text'>Bringing your ideas to life has never been easier.</p>
            </div>
            <div className='hworks_items'>
                <div className='hwork_text'>
                    <div className='hwork_item'>
                        <p className='hwork_subtitle'><i className="fa-solid fa-1"></i> Subscribe & onboard</p>
                        <p className='hwork_title'>Get started within minutes: choose your plan and 
                            subscribe via Stripe. Welcome to Artysan.</p>
                    </div>
                    <div className='hwork_item'>
                        <p className='hwork_subtitle'><i className="fa-solid fa-2"></i> Request designs</p>
                        <p className='hwork_title'>Use your personal Trello board to submit your design requests.
                            We’ll get to work right away.</p>
                    </div>
                    <div className='hwork_item'>
                        <p className='hwork_subtitle'><i className="fa-solid fa-3"></i> Review & approve</p>
                        <p className='hwork_title'>Receive and review the designs in Figma. 
                            Provide feedback and approve to finalise.</p>
                    </div>
                </div>
                <div className='hwork_images'>
                    <img src={hwork_rasm} alt="#" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWork
