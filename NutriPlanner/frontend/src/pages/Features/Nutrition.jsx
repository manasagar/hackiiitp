import React from 'react'
import { useState } from 'react';
import '../../styles/nutrition.css';
import axios from 'axios';
import {BackButton} from '../../components/BackButton';
import { Loading } from '../../components/Loading';
import { NutritionOutput } from './NutritionOutput';
import { useNavigate } from 'react-router-dom';

export const Nutrition = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    age:"",
    height:"",
    weight:"",
    gender:"",
    no_days:"",
    no_meals:"",
    weightLoss:""
  });
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const submitData = async()=>{
        try {
          setLoading(true);
          console.log(formData);
          const response = await axios.post('/api/nutrition/',formData);
          navigate('/features/nutrition/output',{
            state:{
              output : response.data
            }
          });
        } catch (error) {
          console.log(error);
          setError(error.response.data.data);
        }
        finally{
          setLoading(false);
        }
    }
    submitData();
  }

  const onChangeHandler =(e)=>{
    const {name,value,type,checked} = e.target;
    setFormData((prevData)=>{
      return {
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div className='Nutri_outer'>
    <BackButton />
    {loading ? <Loading /> : (
    <div>
    <p className='nutri-header'>Experience Tailored Nutrition with NutriPlan's Interactive Diet Planner!</p>
    <p className='nutri-body'>At NutriPlan, we offer a seamless way for users to embark on their personalized health journey. Simply fill out our user-friendly form, and unlock a customized diet plan designed just for you. Our intuitive platform ensures that your dietary needs and preferences are taken into account, providing you with a comprehensive and tailored nutrition guide. Start your wellness transformation today by completing our form and receiving your unique plan to kickstart a healthier lifestyle!</p>
    <div className="nutrition-container">
      <form className='nutrition-form' onSubmit={handleSubmit}>
      <p className='nutri-title'>Diet Planner Form</p>
        <label className="nutrition-form-label">
          What is your Age?
          <br />
          <input
            type="text" 
            placeholder='Enter Age'
            name="age"
            value={formData.age}
            onChange={onChangeHandler}
            className="nutrition-form-input"
            required
          />
        </label>
        <br />
        <label className="nutrition-form-label">
          What is your Height?
          <br />
          <input
            type="text"
            name="height"
            placeholder='Enter Height(in cm)'
            value={formData.height}
            onChange={onChangeHandler}
            className="nutrition-form-input"
            required
          />
        </label>
        <br />
        <label className="nutrition-form-label">
          What is your Weight?
          <br />
          <input
            type="text"
            name="weight"
            placeholder='Enter Weight(in kg)'
            value={formData.weight}
            onChange={onChangeHandler}
            className="nutrition-form-input"
            required
          />
        </label>
        <br />
        <label className="nutrition-form-label">
          What is your Gender?
          <br />
          <label htmlFor="male">
            <input
              className='radio'
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={onChangeHandler}
              required
              checked={formData.gender === "male"}
            /> Male
          </label>
          <br />
          <label htmlFor="female">
            <input
              className='radio'
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={onChangeHandler}
              required
              checked={formData.gender === "female"}
            /> Female
          </label>
        </label>
        <br />
        <label className="nutrition-form-label">
          How many days do you exercise in a week?
          <br />
          <input
            type="text"
            name="no_days"
            placeholder='Enter no. of days'
            value={formData.no_days}
            onChange={onChangeHandler}
            required
            className="nutrition-form-input"
          />
        </label>
        <br />
        <label className="nutrition-form-label">
         How many meals do you typically have in a day?
         <br />
         <input
           type="text"
           name="no_meals"
           placeholder='Enter no. of meals'
           value={formData.no_meals}
           onChange={onChangeHandler}
           required
           className="nutrition-form-input"
         />
       </label>
       <br />
       <label className="nutrition-form-label">
          How much weight do you want to lose?
          <br />
          <label htmlFor="maintain-weight">
          <input
            className='radio'
            type="radio"
            name="weightLoss"
            value="Maintain Weight"
            onChange={onChangeHandler}
            required
            checked={formData.weightLoss === "Maintain Weight"}
            id="maintain-weight"
          /> Maintain Weight
          </label>
          <br />
          <label htmlFor="mild-loss">
          <input
            className='radio'
            type="radio"
            name="weightLoss"
            value="Mild Weight Loss"
            onChange={onChangeHandler}
            checked={formData.weightLoss === "Mild Weight Loss"}
            required
            id="mild-loss"
          /> Mild Weight Loss
          </label>
          <br />
          <label htmlFor="weight-loss">
          <input
            className='radio'
            type="radio"
            name="weightLoss"
            value="Moderate Weight Loss"
            onChange={onChangeHandler}
            checked={formData.weightLoss === "Moderate Weight Loss"}
            required
            id="weight-loss"
          />Moderate Weight Loss
          </label>
          <br />
          <label htmlFor="extreme-loss">
          <input
            className='radio'
            type="radio"
            name="weightLoss"
            value="Extreme Weight Loss"
            onChange={onChangeHandler}
            required
            checked={formData.weightLoss === "Extreme Weight Loss"}
            id="extreme-loss"
          /> Extreme Weight Loss
          </label>
        </label>
       <br />
       {error && <p>{error}</p>}
       <button className='nutrition-submit-button' type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
     </form>
   </div>
   </div>
   )}
   </div>
  )
}