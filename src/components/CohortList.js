import React, { Component } from 'react';
import ListItem from './ListItem';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';

import Loader from './Loader.js'



class CohortList extends Component {
    render() {
      let formattedLabel = (data) =>{
        data.forEach(item => item.label = item.label.replace('-', ' '));
        return data;
      };

    return (
      <div className="wrapper bridge--cohorts">
        <h1>Cohorts</h1>
        <ul>

          { this.props.loading ? <Loader/> : this.props.applicants.map(id => (
            <ListItem key={id.label} id={id.label} />
          )) }
        </ul>
        { this.props.loading ? '' :

        <LineGraph applications={formattedLabel(this.props.applicants)}  />
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  applicants: state.applicants.applicants.data || [],
  loading: state.applicants.loading,
  error: state.applicants.error
})

export default connect(mapStateToProps)(CohortList);
