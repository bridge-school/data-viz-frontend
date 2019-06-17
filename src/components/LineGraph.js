import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

// pass this application data in after API working
const LineGraph = (props) => {
  return (
    <VictoryChart>
      <VictoryLine
        style={{
          labels: { display: 'none' },
          tickLabels: { fontFamily: 'Open Sans', fontSize: '8px' },
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
          tickLabels: { fontFamily: 'Open Sans', fontSize: '8px' },
          axisLabel: { padding: 30, fontFamily: 'Open Sans', fontSize: '12px' }
        }}
      />
      <VictoryAxis
        dependentAxis
        // remove decimal value from ticker
        // tickFormat={tick => `${Math.round(tick)}`}
        label="Number of Applicants"
        style={{
          tickLabels: { fontFamily: 'Open Sans', fontSize: '8px' },
          axisLabel: { padding: 35, fontFamily: 'Open Sans', fontSize: '12px' }
        }}
      />
    </VictoryChart>
  );
};

export default LineGraph;
