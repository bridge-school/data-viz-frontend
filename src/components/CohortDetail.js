import React from 'react';
import Navigation from './Navigation';
import BarGraph from './BarGraph';
import mockData from '../mockData.json';

class CohortDetail extends React.Component {
  constructor(props) {
    super(props);
    // add loading state
    this.state = { loading: true, data: {}, button: 'gender' };
  }

  componentDidMount() {
    // this will be async after fetch
    this.setState({
      loading: false,
      data: mockData[this.props.match.params.id]
    });
  }

  handleDataChange = key => {
    this.setState({ button: key });
  };

  render() {
    // create an array of keys to pass to Navigation
    const { id } = this.props.match.params;
    const { data, loading, button } = this.state;
    const keys = Object.keys(data);

    return (
      <>
        <Navigation onChange={this.handleDataChange} keys={keys} />
        {loading ? 'loading' : <BarGraph id={id} data={data[button]} />}
      </>
    );
  }
}
export default CohortDetail;
