import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import BarGraph from './BarGraph';
// import mockData from '../mockData.json';
import { fetchCohort } from '../store/actions';

class CohortDetail extends React.Component {
  constructor(props) {
    super(props);
    // connect to redux store later
    this.state = { button: 'gender' };
  }

  componentDidMount() {
    //TODO: dispatch action to change loading to false when component mounted
    //TODO: move state to mapStateToProps
    const { id } = this.props.match.params;
    this.props.fetchCohort(id);    
  }

  //TODO: change to dispatching an action
  handleDataChange = key => {
    this.setState({ button: key });
  };

  //TODO: use id to query back end
  //TODO:
  render() {
    const { id } = this.props.match.params;
    const { button } = this.state;

    return (
      <div className="results--container">
        <Navigation onChange={this.handleDataChange} />
        {this.props.loading ? 'loading' : <BarGraph id={id} data={this.props.cohortDetails[button]} />}
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
