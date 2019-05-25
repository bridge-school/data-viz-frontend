import React from 'react';
import Navigation from './Navigation';
import BarGraph from './BarGraph';

const gender = [
  { x: 'woman', y: 300 },
  { x: 'men', y: 50 },
  { x: 'non', y: 10 }
];

class CohortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: gender };
  }

  render() {
    return (
      <>
        <Navigation />
        <BarGraph id={this.props.match.params.id} data={this.state.data} />
      </>
    );
  }
}
export default CohortDetail;
