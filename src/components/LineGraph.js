import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

// pass this application data in after API working
const LineGraph = (props) => {
  return (
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: '#eb2c97' }
        }}
        x='label'
        y='value'
        data={props.applications}
        animate={{ easing: 'sinInOut' }}
      />
    </VictoryChart>
  );
};

export default LineGraph;
