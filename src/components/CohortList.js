import React, { Component } from 'react';
import ListItem from './ListItem';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';
//connect to redux store later to get ids
// const ids = ['7', '6', '5', '4'];

class CohortList extends Component {
  // componentDidUpdate() {
    // }
    render() {
      // const { ids } = this.props.results.data
    return (
      <div className="wrapper bridge--cohorts">
      {console.log(this.props.results.data)}
        <h1>Cohorts</h1>
        <ul>
          { this.props.loading ? 'Loading' : this.props.results.data.map(id => (
            <ListItem key={id.label} id={id.label} />
          )) }
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
