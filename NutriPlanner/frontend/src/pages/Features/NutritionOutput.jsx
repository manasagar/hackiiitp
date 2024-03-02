import React from 'react'
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export const NutritionOutput = () => {
    const location = useLocation();
    const food = location.state.output;

    const foodItems = Object.keys(food).map((val,ind)=>{
      return (
          <div key={ind+1}>
            <p>Food Item - {val}</p>
            <img src={food[val].image} alt="Food Item Image" />
            {food[val].VegNovVeg == 0 ? <div className='veg'></div> : <div className='nonveg'></div>}
            <p>Nutrients</p>
            <ul>
              <li>Calories = {food[val].Calories}</li>
              <li>Fats = {food[val].Fats}</li>
              <li>Carbohydrates = {food[val].Carbohydrates}</li>
              <li>Proteins = {food[val].Proteins}</li>
              <li>Fibre = {food[val].Fibre}</li>
              <li>Sugars = {food[val].Sugars}</li>
              <li>Calcium = {food[val].Calcium}</li>
              <li>Iron = {food[val].Iron}</li>
              <li>Sodium = {food[val].Sodium}</li>
              <li>Potassium = {food[val].Potassium}</li>
              <li>VitaminD = {food[val].VitaminD}</li>
            </ul>
          </div>
      )
    })

  return (
    <div>
        <BackButton />
        {foodItems}
    </div>
  )
}