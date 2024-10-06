import React from 'react';
import './faq.css';
import '../BenefitsSection/benefits.css';

const FAQs = () => {
  return (
    <div id='faq'>
        <div className='faq_section container'>
            <div className='subtitle_items'>
                <p className='subtitle_text'>FAQs</p>
                <h2 className='title_text'>Frequently asked</h2>
            </div>
            <div className='question_container'>
                <div className='faq_content'>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>How do I get started?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>Who will be working on my designs?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>How do I submit my requests?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>How long does it take to receive my designs?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>How do I provide feedback for my designs?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>Can I cancel or pause my subscription?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                    <div className='content_items'>
                        <div className='question_content'>
                            <div className='question_text'><p>What software do you use for your work?</p></div>
                            <div className='question_icon'><i class="fa-solid fa-plus fa-lg"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQs
