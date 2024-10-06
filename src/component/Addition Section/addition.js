import React from 'react';
import './addition.css';
import '../BenefitsSection/benefits.css';
import commentRasm1 from './addition-image/comm-img1.jpeg';
import commentRasm2 from './addition-image/comm-img2.jpeg';
import commentRasm3 from './addition-image/comm-img3.jpeg';
import commentRasm4 from './addition-image/comm-img4.jpeg';
import commentRasm5 from './addition-image/comm-img5.jpeg';
import commentRasm6 from './addition-image/comm-img6.jpeg';



const AdditionSection = () => {
  return (
    <div>
        <div className='addition_section container'>
            <div className='addition_section_items'>
                <div className='subtitle_items'>
                    <h2 className='title_text'>You'll be in good company</h2>
                    <p className='comment_text'>Hear it from those who know best.</p>
                </div>
                <div className='addition_comments_items'>
                    <div className='addition_comments'>
                        <div className='user_card'>
                            <div className='user_card_items'>
                                <div className='user_id'>
                                    <div className='user_img'>
                                        <img src={commentRasm1} alt="#" />
                                    </div>
                                    <div className='user_name'>
                                        <p>Ben Aung</p>
                                        <p>Chief Risk Officer, Sage</p>
                                    </div>
                                </div>
                                <div className='user_rate'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className='user_comment'>
                                    <p>
                                        It’s been a pleasure working with you @Mass , especially how you have turned our usually 
                                        unstructured ideas into something so unique and engaging for our customers
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='user_card'>
                            <div className='user_card_items'>
                                <div className='user_id'>
                                    <div className='user_img'>
                                        <img src={commentRasm2} alt="#" />
                                    </div>
                                    <div className='user_name'>
                                        <p>Gustavo Zeidan</p>
                                        <p>CISO, Sage</p>
                                    </div>
                                </div>
                                <div className='user_rate'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className='user_comment'>
                                    <p>
                                        It has been an absolute delight to work with you @Mass. 
                                        I cannot wait to see what you can do next as we evolve our
                                         mission to break down barriers for SMBs 🙌
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='user_card'>
                            <div className='user_card_items'>
                                <div className='user_id'>
                                    <div className='user_img'>
                                        <img src={commentRasm3} alt="#" />
                                    </div>
                                    <div className='user_name'>
                                        <p>Stephen Hunt</p>
                                        <p>VP Privacy and Data, Sage</p>
                                    </div>
                                </div>
                                <div className='user_rate'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className='user_comment'>
                                    <p>
                                        Extremely rewarding collaborating with you @Mass and very much appreciate how you take our content, 
                                        understand it and truly bring it to life, always with a striking and easily navigable UX⚡️
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='user_card'>
                            <div className='user_card_items'>
                                <div className='user_id'>
                                    <div className='user_img'>
                                        <img src={commentRasm4} alt="#" />
                                    </div>
                                    <div className='user_name'>
                                        <p>Daniel Barnett</p>
                                        <p>Founder CEO, Worketc</p>
                                    </div>
                                </div>
                                <div className='user_rate'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className='user_comment'>
                                    <p>
                                        @Mass  is without a doubt an attentive and talented designer, 
                                        making him a reliable professional to work with. 
                                        I would recommend him to anyone looking to step up their design game
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='user_card'>
                            <div className='user_card_items'>
                                <div className='user_id'>
                                    <div className='user_img'>
                                        <img src={commentRasm5} alt="#" />
                                    </div>
                                    <div className='user_name'>
                                        <p>Elena Forde</p>
                                        <p>Talent Acquisition, Salt</p>
                                    </div>
                                </div>
                                <div className='user_rate'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className='user_comment'>
                                    <p>
                                        It was a pleasure working with @Mass, he is a highly skilled designer 
                                        and the client only had amazing things to say. I would recommend him to anyone who 
                                        is looking for an excellent designer and I hope to work with him again in the future!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='user_card'>
                            <div className='user_card_items'>
                                <div className='user_id'>
                                    <div className='user_img'>
                                        <img src={commentRasm6} alt="#" />
                                    </div>
                                    <div className='user_name'>
                                        <p>Vee Mercado</p>
                                        <p>Design Leader, WolliesX</p>
                                    </div>
                                </div>
                                <div className='user_rate'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className='user_comment'>
                                    <p>
                                        @Mass is visually creative and detailed, and has great eye for possibilities 
                                        through understanding and sharing insights. 
                                        Don't be surprised when you pick up a thing or two when collaborating with him
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdditionSection
