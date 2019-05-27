import React from 'react';
import Navigation from './Navigation';
import BarGraph from './BarGraph';
import mockData from '../mockData.json';

class CohortDetail extends React.Component {
  constructor(props) {
    super(props);
    // set data to show gender identity by defalut
    this.state = { data: mockData.gender };
  }

  handleDataChange = key => this.setState({ data: mockData[key] });

  render() {
    // create an array of keys to pass to Navigation
    const keys = Object.keys(mockData);
    return (
      <>
        <Navigation onChange={this.handleDataChange} keys={keys} />
        <BarGraph id={this.props.match.params.id} data={this.state.data} />
      </>
    );
  }
}
export default CohortDetail;
