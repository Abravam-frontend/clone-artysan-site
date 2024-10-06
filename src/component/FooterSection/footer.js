import React from 'react';
import '../BenefitsSection/benefits.css';
import './footer.css';
import '../Prices/prices.css';
import footerimg1 from '../BenefitsSection/benefits-image/clock.svg';
import footerimg2 from '../BenefitsSection/benefits-image/raceta.svg';
import sitelogo from '../HeaderSection/navbar/logo.png';

const Footer = () => {
  return (
    <div>
        <div className='footer_section container'>
            <div className='subtitle_items'>
                <p className='framer_text mt-4'><i className="fa-regular fa-circle-dot fa-fade"></i>Available</p>
                <h2 className='title_text'>The time is nigh, Hero</h2>
                <p className='comment_text'>A bit dramatic perhaps, but slots are filling fast — don't miss your chance to join!</p>
            </div>
            <div className='footer_content'>
                <div className='footer_content_items'>
                    <div className='pricing_comment_area'>
                        <div className='pcomment_img'>
                            <img src={footerimg1} alt="#" />
                        </div>
                        <div className='pcomment_text'>
                            <p>Book a Free intro call</p>
                            <p>Tell us about your projects, and let's find out if Artysan is right for you.</p>
                        </div>
                        <div className='pcomment_icon'><i class="fa-solid fa-circle-arrow-right"></i></div>
                    </div>
                    <div className='pricing_comment_area'>
                        <div className='pcomment_img'>
                            <img src={footerimg2} alt="#" />
                        </div>
                        <div className='pcomment_text'>
                            <p>Get started Today</p>
                            <p>All your design needs streamlined into one monthly membership.</p>
                        </div>
                        <div className='pcomment_icon'><i class="fa-solid fa-circle-arrow-right"></i></div>
                    </div>
                </div>
            </div>
            <div className='footer_content_endl'>
                <div className='content_endl_items'>
                    <div className='content_left'>
                        <div className='content_left_items'>
                            <div className='left_logo'><img src={sitelogo} alt="#" /></div>
                            <div className='left_text'><p>© Artysan 2024. All rights reserved.</p></div>
                        </div>
                    </div>
                    <div className='content_right'>
                        <div className='content_right_items'>
                            <div className='footer_social_icons'>
                                <i class="fa-solid fa-phone fa-xl"></i>
                                <i class="fa-regular fa-envelope fa-xl"></i>
                                <i class="fa-brands fa-x-twitter fa-xl"></i>
                                <i class="fa-brands fa-linkedin fa-xl"></i>
                            </div>
                            <div className='footer_privacy'>
                                <a href="footer">Terms of service</a>
                                <a href="footer">Privacy policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
