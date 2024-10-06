import React from 'react';
import '../BenefitsSection/benefits.css';
import './prices.css';
import comment_img from './pricing-images/pricing-comment.png'


const Price = () => {
  return (
    <div id='pricing'>
        <div className='pricing container'>
            <div className='subtitle_items'>
                <p className='subtitle_text'>Pricing</p>
                <h2 className='title_text'>Join Artysan today</h2>
                <p className='comment_text'>Simple, predictable pricing. Choose your plan and start designing.</p>
            </div>
            <div className='pricing_items'>
                <div className='pricing_card_items'>
                    <div className='p_first_card'>
                        <div className='first_card_subtitle'>
                            <h3>Starter</h3>
                            <div className='card_price'>
                                <h4>$1900</h4>
                                <p>/14 days</p>
                            </div>
                            <p>First time? Try us out with a 14-day starter.One-time offer for new customers.</p>
                        </div>
                        <div className='check_list'>
                            <p><i class="fa-regular fa-circle-check"></i> Dedicated Senior Designer</p>
                            <p><i class="fa-regular fa-circle-check"></i> Full design services available</p>
                            <p><i class="fa-regular fa-circle-check"></i> One request at a time</p>
                            <p><i class="fa-regular fa-circle-check"></i> Delivery/updates every 48 hours</p>
                            <p><i class="fa-regular fa-circle-check"></i> Unlimited requests/revisions</p>
                            <p className='xmark'><i class="fa-regular fa-circle-xmark"></i> Unlimited brands/clients</p>
                            <p className='xmark'><i class="fa-regular fa-circle-xmark"></i> Webflow development</p>
                        </div>
                        <div className='pricing_button'>
                            <a href='salom'>Get started today</a>
                        </div>
                    </div>
                    <div className='p_second_card p_first_card'>
                        <div className='first_card_subtitle'>
                            <h3>Membership</h3>
                            <div className='card_price'>
                                <h4>$4000</h4>
                                <p>/month</p>
                            </div>
                            <p>One monthly fee, endless possibilities.Pause or cancel anytime.</p>
                        </div>
                        <div className='check_list'>
                            <p><i class="fa-regular fa-circle-check"></i> Dedicated Senior Designer</p>
                            <p><i class="fa-regular fa-circle-check"></i> Full design services available</p>
                            <p><i class="fa-regular fa-circle-check"></i> One request at a time</p>
                            <p><i class="fa-regular fa-circle-check"></i> Delivery/updates every 48 hours</p>
                            <p><i class="fa-regular fa-circle-check"></i> Unlimited requests/revisions</p>
                            <p><i class="fa-regular fa-circle-check"></i> Unlimited brands/clients</p>
                            <p><i class="fa-regular fa-circle-check"></i> Webflow development</p>
                        </div>
                        <div className='pricing_button'>
                            <a href='salom'>Get started today</a>
                        </div>
                    </div>
                </div>
                <div className='pricing_comment_items'>
                    <div className='first_comment'>
                        <div><i class="fa-solid fa-lock"></i> Secure checkout via</div>
                        <p>stripe</p>
                    </div>
                    <div className='pricing_comment_area'>
                        <div className='pcomment_img'>
                            <img src={comment_img} alt="" />
                        </div>
                        <div className='pcomment_text'>
                            <p>Unsure? Book a Free intro call</p>
                            <p>Tell us about your project, and let's <br /> find out if Artysan is right for you</p>
                        </div>
                        <div className='pcomment_icon'><i class="fa-solid fa-circle-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price
