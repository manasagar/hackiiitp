import React from 'react'
import background from'../assets/about_background.jpg'
import nutritionist from '../assets/Nutritonist1.jpg'
import researcher from '../assets/researcher.jpg';
import {BackButton} from '../components/BackButton';
import '../styles/about.css'

export const About = () => {
  return (
    <div className="About_outer">
      <BackButton />
    <div className='About_Screen'>
      <div className="About_Container">
      <img className="About_back_image" src={background} alt="" />
      <div className="About_Text_cover">
      <div className="About_Text">
    
          
        <h2>Welcome to NutriPlan, where wellness meets innovation!<br/>Our mission is to redefine the way you approach health by delivering personalized nutrition guidance tailored to your unique journey.</h2>        
      </div>
      </div>
    </div>
    <div className="About_indi">
       <div>
       The Faces Behind NutriPlan
       </div>
       <div>Meet the passionate minds shaping the future of wellness:
       </div>
    </div>
      <div className="About_diet_planner">
        <img src={nutritionist} alt="" className="About_person" />
        <div className="About_indi_cover"> <div className="About_pos"><h4>Nutritionist</h4></div>
        <div className="About_diet_Planner_text"><p>Dr.Sarah, a nutrition scientist at heart, crafts personalized diet plans that harmonize with the latest nutritional insights. With a decade of experience, she has been at the forefront of nutrition innovation.</p></div>
        </div>
      </div>
      <div className="About_diet_planner">
        <img src={researcher} alt="" className="About_person" />
        <div className="About_indi_cover"> <div className="About_pos"><h4>Nutritionist</h4></div>
        <div className="About_diet_Planner_text"><p>Dr. John, our esteemed medical advisor, holds a significant role in ensuring that our recommendations align with both nutritional science and medical best practices. With a background in healthcare, he brings a holistic perspective to our platform.</p></div>
        </div>
      </div>
      <div className="About_topic">
        <div className="About_topic_name"><h4>Our Vision</h4></div>
        <div className="About_topic_text"><p>At NutriPlan, we're not just about trends; we're about science-backed wellness. We envision a future where personalized nutrition is not just a choice but a standard. Our commitment to ongoing research and development is the cornerstone of our mission.</p></div>
        
      </div>
      <div className="About_topic">
        <div className="About_topic_name"><h4>Bridging Science and Wellness</h4></div>
        <div className="About_topic_text"><p>Behind NutriPlan is a dedicated team of researchers continuously exploring the intersections of nutrition, health, and technology. Led by our in-house researchers, we stay abreast of the latest scientific literature to ensure that our platform is at the forefront of evidence-based wellness.</p></div>
        
      </div>
      <div className="About_topic">
        <div className="About_topic_name"><h4>Join Us on the Wellness Voyage</h4></div>
        <div className="About_topic_text"><p>Whether you're on a quest for weight loss, muscle gain, or all-around well-being, NutriPlan is your companion. Our platform integrates the latest scientific insights into practical, personalized recommendations, making wellness an achievable and enjoyable journey. Our commitment to ongoing research and development is the cornerstone of our mission.</p></div>
        
      </div>
    </div>
    </div>
  )
}



