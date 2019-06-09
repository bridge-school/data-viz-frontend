import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import BarGraph from './BarGraph';
import mockData from '../mockData.json';
import { fetchCohort } from '../store/actions';

class CohortDetail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // connect to redux store later
  //   this.state = { loading: true, data: {}, button: 'gender' };
  // }

  componentDidMount() {
    //TODO: dispatch action to change loading to false when component mounted
    //TODO: move state to mapStateToProps
    this.props.fetchCohort(this.props.match.params);
    // this will be async after fetch
    // this.setState({
    //   loading: false,
    //   data: mockData[this.props.match.params.id]
    // });
  }

  //TODO: change to dispatching an action
  handleDataChange = key => {
    this.setState({ button: key });
  };

  //TODO: use id to query back end
  //TODO:
  render() {
    // const { id } = this.props.match.params;
    // const { data, loading, button } = this.state;

    return (
      <div className="results--container">
        <Navigation onChange={this.handleDataChange} />
        {/* {loading ? 'loading' : <BarGraph id={id} data={data[button]} />} */}
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
