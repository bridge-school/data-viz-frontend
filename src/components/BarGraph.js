import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const BarGraph = props => {
  return (
    <section>
      <h2>Cohort {props.id}</h2>

      <VictoryChart
        domainPadding={{ x: 50 }}
        animate={{ duration: 1000, easing: 'expOut' }}
      >

        {/* //TODO: add labels to VictoryAxis components like this:*/}
        {/* <VictoryAxis label="Time (ms)" /> */}
        <VictoryAxis dependentAxis />
        <VictoryAxis />
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
