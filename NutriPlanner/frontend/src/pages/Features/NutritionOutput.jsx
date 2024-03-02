import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export const NutritionOutput = () => {
    const location = useLocation();
    const data = location.state.output;

    const height = (data.height)/100;
    const weight = data.weight;
    const calH = (height*height);

    let BMI = weight/calH;

    let category = "";

    if(BMI<18.5){
      category = "Underweight";
    }
    else if(BMI>=18.5 && BMI<25){
      category = "Normal";
    }
    else if(BMI>=25 && BMI<30){
      category = "Overweight";
    }
    else{
      category = "Obesity";
    }

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

    const foodItems = data.plan.map((foodItem, index) => (
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
            <p>BMI CALCULATOR</p>
            <p>Body Mass Index (BMI)</p>
            <p>{BMI}</p>
            <p>{category}</p>
            <p>Healthy BMI range : 18.5kg/m<sup>2</sup> - 25kg/m<sup>2</sup></p>
            {foodItems}
        </div>
    );
};
