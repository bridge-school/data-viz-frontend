import React from 'react';
import ListItem from './ListItem';
import LineGraph from './LineGraph';

//connect to redux store later to get ids
const ids = ['7', '6', '5', '4'];

const CohortList = props => {
  return (
    <div className="wrapper bridge--cohorts">
      <h1>Cohorts</h1>
      <ul>
        {ids.map(id => (
          <ListItem key={id} id={id} />
        ))}
      </ul>
      <LineGraph />
    </div>
  );
};

export default CohortList;
