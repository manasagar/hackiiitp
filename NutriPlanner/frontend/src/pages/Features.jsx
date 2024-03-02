import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import fsnap from "../assets/features_snap.jpg"
import fChat from '../assets/features_chatbot.jpg'
import fTrack from '../assets/tracker.jpg'
import diet from '../assets/weekly_diet.png'
import '../styles/features.css';
import {BackButton} from '../components/BackButton';

const featureArr = [
  {
    id:1,
    title : 'Food-Recipe',
    detail: 'Explore a variety of delicious recipes and cooking ideas to inspire your culinary adventures.',
    to : '/features/foodrecipe',
  },
  {
    id:2,
    title : 'Nutrition',
    detail: 'Learn about healthy eating habits, nutritional information, and how to maintain a balanced diet.',
    to : '/features/nutrition',
    imgurl : diet
  },
  {
    id:3,
    title : 'AI Chatbot',
    detail: 'Engage with our AI-powered chatbot for quick answers, assistance, and personalized recommendations.',
    to : '/features/chatbot',
    imgurl : fChat
  },
  {
    id:4,
    title : 'Food Recognition',
    detail: 'Effortlessly identify various foods and ingredients using advanced image recognition technology.',
    to : '/features/photoinfo',
    imgurl : fsnap
  },
  {
    id:5,
    title : 'Tracker',
    detail: 'Track your progress, set goals, and monitor your activities to stay motivated and achieve success.',
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
      <p>Discover the latest and greatest features now available! Our team is always working hard to bring you the best experience possible. With our newest updates, you'll be able to streamline your workflow, save time, and get more done. From advanced tools to improved user interfaces, our platform has everything you need to be more productive and efficient. Whether you're a seasoned user or new to our platform, you'll love what we've added. So check out our latest features and start exploring today!</p>
    </div> 
      <div className="feature-container">
        <div className="feature-link">
          <div className='feature-border'>
            <NavLink onClick={() => handleClick(1)}>
              Food-Recipe 
            </NavLink>
          </div>
            <br />
            <div className='feature-border'>
            <NavLink onClick={() => handleClick(2)}>
              Nutrition
            </NavLink>
            </div>
            <br />
            <div className='feature-border'>
            <NavLink onClick={() => handleClick(3)} >
              AI ChatBot
            </NavLink>
            </div>
            <br />
            <div className='feature-border'>
            <NavLink onClick={() => handleClick(4)}>
              Food Recognition
            </NavLink>
            </div>
            <br />
            <div className='feature-border'>
            <NavLink onClick={() => handleClick(5)}>
              Tracker
            </NavLink>
            </div>
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

