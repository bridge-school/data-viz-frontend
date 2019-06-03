import React from 'react';
import Navigation from './Navigation';
import BarGraph from './BarGraph';
import mockData from '../mockData.json';

class CohortDetail extends React.Component {
  constructor(props) {
    super(props);
    // connect to redux store later
    this.state = { loading: true, data: {}, button: 'gender' };
  }

  componentDidMount() {
    //TODO: dispatch action to change loading to false when component mounted
    //TODO: move state to mapStateToProps

    // this will be async after fetch
    this.setState({
      loading: false,
      data: mockData[this.props.match.params.id]
    });
  }

  //TODO: change to dispatching an action
  handleDataChange = key => {
    this.setState({ button: key });
  };

  render() {
    const { id } = this.props.match.params;
    const { data, loading, button } = this.state;

    return (
      <div className="results--container">
        <Navigation onChange={this.handleDataChange} />
        {loading ? 'loading' : <BarGraph id={id} data={data[button]} />}
      </div>
    );
  }
}
export default CohortDetail;
