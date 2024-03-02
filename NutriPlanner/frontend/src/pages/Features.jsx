import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import fChat from '../assets/features_chatbot.jpg'
import fTrack from '../assets/tracker.jpg'
import diet from '../assets/new_diet_Plan.webp';
import '../styles/features.css';
import {BackButton} from '../components/BackButton';

const featureArr = [
  {
    id:1,
    title : 'Personal Diet Planner',
    detail: 'Explore the fundamentals of healthy eating, delve into essential nutritional insights, and discover strategies for sustaining a well-rounded diet.',
    to : '/features/nutrition',
    imgurl : diet
  },
  {
    id:2,
    title : 'AI Chatbot',
    detail: "Interact with our AI-powered chatbot for prompt answers, assistance, and personalized recommendations.",
    to : '/features/chatbot',
    imgurl : fChat
  },
  {
    id:3,
    title : 'NutriScan',
    detail: "Utilize NutriScan to monitor your progress, establish goals, and track activities for continuous motivation and successful outcomes.",
    to : '/features/tracker',
    imgurl : fTrack
  },
];


export const Features = () => {
    const [feature,setFeature] = useState(featureArr[0]);
  
    const handleClick = (id)=>{
        const findFeature = featureArr.find((obj)=>{
            if(obj.id === id){
              return obj;
            }
        });
        console.log(findFeature);
        setFeature(findFeature);
    }

  return (
    <div className='features_outer'>
    <BackButton />
    <div className='feature_Container'>
     <div className="feature-main">
      <h1>Features</h1>
      <p>Dive into the World of NutriPlan - Your Path to Healthier Living! 🌿.Discover the latest and greatest features now available! Our team is always working hard to bring you the best experience possible. With our newest updates, you'll be able to streamline your workflow, save time, and get more done. From advanced tools to improved user interfaces, our platform has everything you need to be more productive and efficient. Whether you're a seasoned user or new to our platform, you'll love what we've added. So check out our latest features and start exploring today!</p>
    </div> 
      <div className="feature-container">
        <div className="feature-link">
            <button className='feature-border' onClick={() => handleClick(1)}>
            <NavLink>
              Personal Diet Planner
            </NavLink>
            </button>
            <br />
            <button className='feature-border' onClick={() => handleClick(2)}>
            <NavLink >
              AI ChatBot
            </NavLink>
            </button>
            <br />
            <button className='feature-border' onClick={() => handleClick(3)}>
            <NavLink>
              NutriScan
            </NavLink>
            </button>
            <br />
        </div>
        {
          <div className='feature-clicked'>
            <h1>{feature.title}</h1>
            <p>{feature.detail}</p>
            <img src={feature.imgurl} alt="" className='feature_img' />
            <NavLink to={feature.to}>Try Now!</NavLink>
          </div>
        }
      </div>
    </div>
    </div>
  )
}

