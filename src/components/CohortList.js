import React, { Component } from 'react';
import ListItem from './ListItem';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';
import Loader from './Loader.js'
//connect to redux store later to get ids

class CohortList extends Component {
    render() {
    return (
      <div className="wrapper bridge--cohorts">
        <h1>Cohorts</h1>
        <ul>
          { this.props.loading ? <Loader/> : this.props.results.data.map(id => (
            <ListItem key={id.label} id={id.label} />
          )) }
        </ul>
        { this.props.loading ? '' : 
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
