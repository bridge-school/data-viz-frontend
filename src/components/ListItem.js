import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = props => {
  return (
    <li>
      <h2>Cohort {props.id}</h2>
      <Link to={`/cohorts/${props.id}`}>frontend development</Link>
    </li>
  );
};

export default ListItem;
