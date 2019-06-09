import React, { Component } from 'react';
import ListItem from './ListItem';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';
//connect to redux store later to get ids
const ids = ['7', '6', '5', '4'];

class CohortList extends Component {
  render() {
    
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
  }
};

const mapStateToProps = (state) => ({
  results: state.results,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(CohortList);
