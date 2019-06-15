import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const BarGraph = props => {
  return (
    <section>
      <h2>{props.id.replace('-', ' ')}</h2>

      <VictoryChart
        domainPadding={[100, 100]}
        animate={{ duration: 1000, easing: 'expOut' }}
      >
        <VictoryAxis
          label={props.xLabel}
          labelPlacement="vertical"
          style={{
            tickLabels: {
              // angle: -45,
              padding: 20,
              fontFamily: 'Open Sans',
              fontSize: '10px',
              wordBreak: 'break-all'
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          // remove decimal value from ticker
          // tickFormat={tick => `${Math.round(tick)}`}
          label="Number of Applicants"
          style={{
            tickLabels: { fontFamily: 'Open Sans', fontSize: '10px' },
            axisLabel: { padding: 35, fontFamily: 'Open Sans' }
          }}
        />
        <VictoryBar
          data={props.data}
          barWidth={40}
          x="label"
          y="value"
          style={{
            labels: { display: 'none', fontFamily: 'Open Sans' },
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
