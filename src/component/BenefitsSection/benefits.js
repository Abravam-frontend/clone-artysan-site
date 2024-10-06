import React from 'react';
import './benefits.css';
import clockImg from './benefits-image/clock.svg';
import racImg from './benefits-image/raceta.svg';


const Benefits = () => {
  return (
    <div className='container' id='benefits'>
        <div className='benefits_items'>
            <div className='subtitle_items'>
                <p className='subtitle_text'>Benefits</p>
                <h2 className='title_text'>Out with the old, in with the <br /> Awesome</h2>
                <p className='comment_text'>Wave goodbye to costly traditional agencies and unreliable freelancers.</p>
            </div>
            <div className='benefits_other'>
                <div className='other_items'>
                    <div className='other_item'>
                        <img src={racImg} alt="#" />
                        <p>Flat monthly fee</p>
                        <p>Predictable budgeting with a fixed monthly payment. No surprises, dead simple.</p>
                    </div>
                    <div className='other_item'>
                        <img src={racImg} alt="#" />
                        <p>Unlimited revisions</p>
                        <p>We refine your designs until you are fully satisfied. Keep tweaking, it’s on us.</p>
                    </div>
                    <div className='other_item'>
                        <img src={racImg} alt="#" />
                        <p>Fast turnaround</p>
                        <p>Rapid delivery and updates every 48 hours. The market moves fast, we move faster.</p>
                    </div>
                    <div className='other_item'>
                        <img src={clockImg} alt="#" />
                        <p>Unique professional design</p>
                        <p>Original designs that make your brand stand out and shine. Boldly and beautifully.</p>
                    </div>
                    <div className='other_item'>
                        <img src={clockImg} alt="#" />
                        <p>No locked contracts</p>
                        <p>Pause or cancel anytime, and come back whenever. Full flexibility, no headaches.</p>
                    </div>
                    <div className='other_item'>
                        <img src={clockImg} alt="#" />
                        <p>Completely async</p>
                        <p>Streamlined collaboration that respects your time. Less meetings, more doings.</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Benefits
