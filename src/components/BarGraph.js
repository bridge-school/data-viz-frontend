import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const BarGraph = props => {
  return (
    <section>
      <h2>{props.id.replace("-", " ")} : {props.xLabel}</h2>
      <VictoryChart
        domainPadding={[200, 100]}
        height={350}
        animate={{ duration: 1000, easing: 'expOut' }}
      >
        <VictoryAxis
          label=""
          style={{
            // axisLabel: { padding: 1000 },
            tickLabels: {display:"none"}
            // tickLabels: { angle: 0, fontFamily: 'Open Sans', fontSize: '10px', wordBreak: 'break-all', width: '5%' }
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
        <VictoryBar horizontal
          data={props.data}
          // barWidth={40}
          x="label"
          y="value"
          style={{
            // labels: { display: 'none' },
            data: {
              fill: '#4e57ca',
              width:30
              // padding:50
            }
          }}
        />
      </VictoryChart>
    </section>
  );
};

export default BarGraph;
