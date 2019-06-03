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
