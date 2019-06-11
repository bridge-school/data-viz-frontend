import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

// pass this application data in after API working
const LineGraph = (props) => {
  return (
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: '#eb2c97' }
        }}
        x="label"
        y="value"
        data={props.applications}
        animate={{ easing: 'sinInOut' }}
      />
      <VictoryAxis
        label="Cohorts"
        style={{
          axisLabel: { padding: 30 }
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={tick => `${Math.round(tick)}`}
        label="Number of Applicants"
        style={{
          axisLabel: { padding: 35 }
        }}
      />
    </VictoryChart>
  );
};

export default LineGraph;
