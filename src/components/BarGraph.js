import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const BarGraph = props => {
  return (
    <section>
      <h2>Cohort {props.id.split("-")[1]}</h2>

      <VictoryChart
        domainPadding={{ x: 50 }}
        animate={{ duration: 1000, easing: 'expOut' }}
      >
        <VictoryAxis
          label=""
          style={{
            axisLabel: { padding: 30 }
          }}
        />
        <VictoryAxis
          dependentAxis
          // remove decimal value from ticker
          // tickFormat={tick => `${Math.round(tick)}`}
          label="Number of Applicants"
          style={{
            axisLabel: { padding: 35 }
          }}
        />
        <VictoryBar
          data={props.data}
          barWidth={40}
          x="label"
          y="value"
          style={{
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
