import React from 'react';

const BarGraph = props => {
  return (
    <section>
      <h2>Cohort {props.id}</h2>
      <svg width="50%" height="100">
        {props.data.map((value, index) => (
          <rect
            x={index * 80}
            y={100 - value.y}
            width="30"
            height={value.y}
            fill="#2fa1d4"
          />
        ))}
      </svg>
    </section>
  );
};

export default BarGraph;
