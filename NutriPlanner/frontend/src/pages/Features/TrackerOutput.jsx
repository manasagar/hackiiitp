import React from 'react'
import { useLocation } from 'react-router-dom'
import { BackButton } from '../../components/BackButton';
import { Chart } from '../../components/Chart';

export const TrackerOutput = () => {
    const location = useLocation();
    const foods = location.state.output;
    console.log(foods);

    let carbohydrate = [];
    let energy = [];
    let sugar = [];
    let fats = [];
    let labels = [];

    for(let i=0;i<foods.length;i++){
      labels.push(foods[i].name);
    }

    for(let i=0;i<foods.length;i++){
      if(foods[i].nutrients['Carbohydrate, by difference']){
        carbohydrate.push(foods[i].nutrients['Carbohydrate, by difference'].value);
      }
      else{
        carbohydrate.push(0);
      }
      if(foods[i].nutrients.Energy){
        energy.push(foods[i].nutrients.Energy.value);
      }
      else{
        energy.push(0);
      }
      if(foods[i].nutrients['Total Sugars']){
        sugar.push(foods[i].nutrients['Total Sugars'].value);
      }
      else{
        sugar.push(0);
      }
      if(foods[i].nutrients['Total lipid (fat)']){
        fats.push(foods[i].nutrients['Total lipid (fat)'].value);
      }
      else{
        fats.push(0);
      }
  }

  return (
    <div className='tracker-outer'>
        <BackButton />
        <div className='tracker_main'>
          <div className="tracker_component">
        <h1>Carbohydrate</h1>
        <Chart labels={labels} nutrient={carbohydrate} unit={'gm'} />
        </div>
        <div className="tracker_component">
        <h1>Energy</h1>
        <Chart labels={labels} nutrient={energy} unit={'kcal'}  />
        </div>
        <div className="tracker_component">
        <h1>Sugar</h1>
        <Chart labels={labels} nutrient={sugar} unit={'gm'} />
        </div>
        <div className="tracker_component">
        <h1>Fats</h1>
        <Chart labels={labels} nutrient={fats} unit={'gm'} />
        </div>
        </div>
    </div>
  )
}
