import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const BarGraph = props => {
  return (
    <section>
      <h2>{props.id.replace("-", " ")} : {props.xLabel}</h2>
      <VictoryChart
        domainPadding={{ x: 15 }}
        padding={{ left: 0, top: 10, right: 100, bottom: 50 }}
        animate={{ duration: 1000, easing: 'expOut' }}
      >
        <VictoryAxis
        style={{
          tickLabels: { display: 'none' },
          labels: { fontFamily: 'Open Sans', fontSize: '10px' },
        }}
        />
        <VictoryAxis
          dependentAxis
          label="Number of Applicants"
          domain={[40]}
          style={{
          tickLabels: { fontFamily: 'Open Sans', fontSize: '8px' },
          axisLabel: { padding: 30, fontFamily: 'Open Sans', fontSize: '10px' }
        }}
        />
        <VictoryBar horizontal
          data={props.data}
          x="label"
          y="value"
          style={{
            data: {
              fill: '#4e57ca',
              width:30,
            },
            labels: {fontFamily: 'Open Sans', fontSize: 10}
          }}
        />
      </VictoryChart>
    </section>
  );
};

export default BarGraph;
