import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

import BarGraph from './BarGraph';
import { fetchCohort } from '../store/actions';
import Loader from './Loader.js'
class CohortDetail extends React.Component {
  constructor(props) {
    super(props);
    // local state that loads gender graph by default
    this.state = { currentButton: 'gender' };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCohort(id);
  }

  handleDataChange = key => {
    // change state of currentButton to match selection
    this.setState({ currentButton: key });
  };

  render() {

    const { id } = this.props.match.params;
    const { currentButton } = this.state;
    const { cohortLoading, cohortDetails } = this.props;


    return (
      <div className="results--container">
        <Navigation onChange={this.handleDataChange} />

        {console.log(cohortDetails)}
        {/* {console.log(cohortLoading)} */}
        {/* {console.log(this.state)} */}

        {(cohortLoading) ? <Loader/> : <BarGraph id={id} data={cohortDetails[currentButton]} />}


      </div>
    );
  }
}

const mapStateToProps = state => ({
  cohortDetails: state.cohorts.cohortDetails,
  cohortLoading: state.cohorts.cohortLoading,
  error: state.cohorts.error
});

const mapDispatchToProps = {
  fetchCohort
};

export default connect(mapStateToProps, mapDispatchToProps)(CohortDetail);
