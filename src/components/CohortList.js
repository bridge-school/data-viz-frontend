import React, { Component } from 'react';
import ListItem from './ListItem';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';
//connect to redux store later to get ids

class CohortList extends Component {
    render() {
    return (
      <div className="wrapper bridge--cohorts">
        <h1>Cohorts</h1>
        <ul>
          { this.props.loading ? 'Loading' : this.props.results.data.map(id => (
            <ListItem key={id.label} id={id.label} />
          )) }
        </ul>
        { this.props.loading ? 'Loading' : 
        <LineGraph applications={this.props.results.data}  />
        }
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
