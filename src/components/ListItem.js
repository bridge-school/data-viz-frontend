import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = props => {
  return (
    <li>
      <h2>{props.id}</h2>
      <Link className="link--pink" to={`/cohorts/${props.id}`}>frontend development</Link>
    </li>
  );
};

export default ListItem;
