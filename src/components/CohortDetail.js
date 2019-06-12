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
    const { loading, cohortDetails } = this.props;

    return (
      <div className="results--container">
        <Navigation onChange={this.handleDataChange} />
        {(loading) ? <Loader/> : <BarGraph id={id} data={cohortDetails[currentButton]} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cohortDetails: state.cohortDetails,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  fetchCohort
};

export default connect(mapStateToProps, mapDispatchToProps)(CohortDetail);
