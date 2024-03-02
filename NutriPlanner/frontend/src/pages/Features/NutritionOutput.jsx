import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import '../../styles/nutritionoutput.css'

export const NutritionOutput = () => {
    const location = useLocation();
    const data = location.state.output;
    console.log(data);

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
    
    const height = (data.height)/100;
    const weight = data.weight;
    const calH = (height*height);

    let BMI = Math.round((weight/calH)*100)/100;

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
    // const foodItems = data.plan.forEach((itemSet, index) => {
    //     return (
    //         <div>
    //             {Object.keys(itemSet).forEach((itemName) => {
    //                 const nutrients = itemSet[itemName];
    //                 {Object.keys(nutrients).forEach((nutri)=>{
    //                     <img src={nutrients[nutri]['image']} alt="" /> 
    //                     {Object.entries(nutrients[nutri]).filter(([key]) => key !== 'image' ).map(([key, value]) => (
    //                     <li key={key}>
    //                             {key} = {value} 
    //                         </li>
    //                     ))
                        
    //                 }})}
    //             })} 
    //         </div>
    //     )
    // });

    const foodItems = data.plan.map((itemSet, index) => (
        <div key={index}>
            <div className='Nutriout_header'><p>Day {index+1}</p></div>
            <div className='NutriOut_Day'>
            {Object.keys(itemSet).map((itemName) => {
                const nutrients = itemSet[itemName];
                return (
                    <div key={itemName}>
                        {Object.keys(nutrients).map((nutri) => {
                            return (
                                <div key={nutri} className='NutriOut_Card'>
                                    <img src={nutrients[nutri]['image']} alt="" />
                                    <p>{nutri}</p>
                                    <div className="NutriOutLi">
                                    {Object.entries(nutrients[nutri]).filter(([key]) => key!=='VegNovVeg' && key !== 'image' && key !== 'Breakfast' && key !== 'Lunch' && key !== 'Dinner').map(([key, value]) => (
                                        <li key={key}>
                                            {key} = {value} {units[key]}
                                        </li>
                                    ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                );
            })}
            </div>
        </div>
    ));

    

    return (
        <div>
            <BackButton />
            <div className="NutriOut_outer">
                <div className='NutriOutBMI'>
                    <div>
            <p><b>BMI CALCULATOR</b></p>
            <p>Body Mass Index (BMI)</p>
            <p>{BMI}</p>
            <p><i><b>{category}</b></i></p>
            <p>Healthy BMI range : 18.5kg/m<sup>2</sup> - 25kg/m<sup>2</sup></p>
            
            </div>
            </div>
            <h2 className='Weekly_diet'>Weekly Diet Plan</h2>
            {foodItems}
            </div>
        </div>
    );
};
