import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export const NutritionOutput = () => {
    const location = useLocation();
    const data = location.state.output;

    const units = {
      Calories : 'cal',
      Fats : 'cal',
      Proteins : 'gm',
      Iron : 'mg',
      Calcium : 'mg',
      Sodium : 'mg',
      Potassium : 'mg',
      Carbohydrates : 'gm',
      Fibre : 'gm',
      VitaminD : 'mg',
      Sugars : 'mg'
    }
    
    const foodItems = data.map((foodItem, index) => (
        <div key={index}>
            {Object.entries(foodItem).map(([foodName, nutritionInfo]) => (
                <div key={foodName}>
                    <img src={nutritionInfo.image} alt={foodName} />
                    <p>{foodName}</p>
                    <ul>
                        {Object.entries(nutritionInfo)
                            .filter(([key]) => key !== 'image' && key !== 'VegNovVeg' && key != 'Breakfast' && key !== 'Lunch' && key !== 'Dinner') 
                            .map(([key, value]) => (
                                <li key={key}>
                                    {key} = {value} {units[key]}
                                </li>
                          ))}
                    </ul>
                </div>
            ))}
        </div>
    ));

    return (
        <div>
            <BackButton />
            {foodItems}
        </div>
    );
};
