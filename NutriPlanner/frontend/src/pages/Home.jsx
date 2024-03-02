import React from 'react'
import img from '../assets/diet_image.jpg';
import Screen from '../assets/Home_Screen.webp';
import snap from '../assets/snap.jpg';
import bot from '../assets/chatbot1.jpg';
import t1 from '../assets/testimonials1.jpg';
import t2 from '../assets/testimonials2.jpg';
import t3 from '../assets/testimonials3.jpg';
import '../styles/home.css'

export const Home = () => {
  return (
    <div className='Home_Screen'>
      <div className="Home_Container">
      <img className="Home_back_image" src={Screen} alt="" />
      <div className="Home_Text_cover">
      <div className="Home_Text">
    
          
        <h2>Unlock Your Healthiest Self <br /> with Personalized <br />Diet Recommendations</h2>        
      </div>
      </div>
    </div>
      <div className="Home_diet_planner">
        <img src={img} alt="" className="Diff_vegies" />
        <div className="Home_diet_Planner_text"><p>Receive customized diet plans designed just for you.
         Our algorithm takes into account your preferences, 
        dietary restrictions, and goals to create a roadmap to a healthier you.</p></div>
      </div>
      <div className="Home_diet_planner">
        <img src={snap} alt="" className="Diff_vegies" />
        <div className="Home_diet_Planner_text"><p>Snap a picture of your meal, and we'll break down its 
          nutritional content for you. 
          Making informed food choices has never been this easy</p></div>
      </div>
      <div className="Home_diet_planner">
        <img src={bot} alt="" className="Diff_vegies" />
        <div className="Home_diet_Planner_text"><p>Have questions about nutrition, dietary choices, 
          or our services? Our friendly chatbot is here to help you 24/7.
           Get instant answers to your queries.</p></div>
      </div>
      <div className="Home_testimonial-container">
        <div className="Home_testimonial-card">
            <p className="Home_testimonial-text">"This nutrition app has transformed the way I approach my diet. 
            The personalized meal plans are not only easy to follow but also align perfectly with my health goals.
             A must-have for anyone serious about nutrition!"</p>
            <div className="Home_testimonial-info">
                <img className="Home_testimonial-avatar" src={t1} alt="User Avatar"/>
                <div className="Home_testimonial-author">
                    <h4 className="Home_author-name">John Doe</h4>
                    <p className="Home_author-position">Corporate Executive</p>
                </div>
            </div>
        </div>
        <div className="Home_testimonial-card">
            <p className="Home_testimonial-text">"I've always struggled with understanding the nutritional 
            value of my meals, but this app has made it effortless.
             The nutrition analysis feature is comprehensive and user-friendly,
             providing insights that have truly empowered my food choices."</p>
            <div className="Home_testimonial-info">
                <img className="Home_testimonial-avatar" src={t2} alt="User Avatar"/>
                <div className="Home_testimonial-author">
                    <h4 className="Home_author-name">Emily Turner</h4>
                    <p className="Home_author-position">Wellness Advocate</p>
                </div>
            </div>
        </div>
        <div className="Home_testimonial-card">
            <p className="Home_testimonial-text">"This app has been a game-changer for me. It not only 
            helps me stay on track with my nutrition but also educates me on making better food choices.
            The combination of expertise and 
            user-friendly design makes it stand out in the crowded wellness app space."</p>
            <div className="Home_testimonial-info">
                <img className="Home_testimonial-avatar" src={t3} alt="User Avatar"/>
                <div className="Home_testimonial-author">
                    <h4 className="Home_author-name">Sarah Williams</h4>
                    <p className="Home_author-position">Fitness Enthusiast</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
