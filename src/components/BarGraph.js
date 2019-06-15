import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const BarGraph = props => {
  return (
    <section>
      <h2>{props.id}</h2>

      <VictoryChart
        domainPadding={[100, 100]}
        animate={{ duration: 1000, easing: 'expOut' }}
      >
        <VictoryAxis
          label=""
          style={{
            axisLabel: { padding: 1000 },
            tickLabels: { angle: 45, fontFamily: 'Open Sans', fontSize: '10px', wordBreak: 'break-all', width: '5%' }
          }}
        />
        <VictoryAxis
          dependentAxis
          // remove decimal value from ticker
          // tickFormat={tick => `${Math.round(tick)}`}
          label="Number of Applicants"
          style={{
            tickLabels: {fontFamily: 'Open Sans', fontSize: '10px'},
            axisLabel: { padding: 35 }
          }}
        />
        <VictoryBar
          data={props.data}
          barWidth={40}
          x="label"
          y="value"
          style={{
            labels: { display: 'none' },
            data: {
              fill: '#4e57ca'
            }
          }}
        />
      </VictoryChart>
    </section>
  );
};

export default BarGraph;
