import React, { useEffect } from 'react';
import Navbar from '../HeaderSection/navbar/navbar';
import Header from '../HeaderSection/header/header';
import ImagesSection from '../HeaderSection/images section/image/images_section';
import Partners from '../HeaderSection/partners/partner';
import Benefits from '../BenefitsSection/benefits';
import HowWork from '../HowWorkSection/howwork';
import Services from '../Servics/services';
import Pricing from '../Prices/prices';
import AdditionSection from '../Addition Section/addition';
import AdditionSection2 from '../Addition Section/addition2';
import FAQsSection from '../FAQs/faq';
import FooterSection from '../FooterSection/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  }, []);
  return (
    <div>
      <Navbar/>
      <div data-aos="fade-up">
        <Header/>
      </div>
      <div data-aos="fade-up">
        <ImagesSection/>
      </div>
      <div data-aos="fade-up">
        <Partners/>
      </div>
      <div data-aos="fade-up">
        <Benefits/>
      </div>
      <div data-aos="fade-up">
        <HowWork/>
      </div>
      <div data-aos="fade-up">
        <Services/>
      </div>
      <div data-aos="fade-up">
        <Pricing/>
      </div>
      <div data-aos="fade-up">
        <AdditionSection/>
      </div>
      <div data-aos="fade-up">
        <AdditionSection2/>
      </div>
      <div data-aos="fade-up">
        <FAQsSection/>
      </div>
      <div data-aos="fade-up">
        <FooterSection/>
      </div>
    </div>
  )
}

export default App
