import React from 'react';
import ListItem from './ListItem';

const fakeIds = [7, 6, 5, 4, 3, 2, 1];

const CohortList = props => {
  return (
    <>
      <h1>Cohorts</h1>
      <ul>
        {fakeIds.map(id => (
          <ListItem key={id} id={id} />
        ))}
      </ul>
    </>
  );
};

export default CohortList;
