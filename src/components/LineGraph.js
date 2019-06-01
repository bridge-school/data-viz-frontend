import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

const applications = [
  { x: 'cohort 4', y: 2000 },
  { x: 'cohort 5', y: 3000 },
  { x: 'cohort 6', y: 2234 },
  { x: 'cohort 7', y: 2341 }
];

// pass this application data in after API working
const LineGraph = () => {
  return (
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: '#eb2c97' }
        }}
        data={applications}
        animate={{ easing: 'sinInOut' }}
      />
    </VictoryChart>
  );
};

export default LineGraph;
