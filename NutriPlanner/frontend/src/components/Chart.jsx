import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export const Chart = ({ labels, nutrient, unit }) => {
  let pieData = [];
  for (let i = 0; i < labels.length; i++) {
    pieData.push({
      id: i,
      value: nutrient[i],
      label: `${labels[i]}: ${nutrient[i]} ${unit}`,
    });
  }

  return (
    <div className='Piechart_container' style={{ width: '50%', height: '50%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <PieChart
          colors={['red', 'orange', 'green', 'yellow']}
          series={[
            {
              data: pieData,
              cx: 90,
            },
          ]}
          width={360}
          height={180}
        />
      </div>
    </div>
  );
};
