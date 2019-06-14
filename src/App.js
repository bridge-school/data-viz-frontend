import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from './store/actions';

import './App.css';

import Header from './components/Header';
import CohortList from './components/CohortList';
import CohortDetail from './components/CohortDetail';

class App extends Component {
  componentDidMount(){

    if(!this.props.loading) {
      this.props.fetchData();
    }

  }

  render(){
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={CohortList} />
            <Route path="/cohorts/:id" component={(CohortDetail)} />
          </Switch>
        </main>
      </>
    );
  };
};

const mapStateToProps = state => ({
  applicants: state.applicants.results,
  loading: state.applicants.loading,
  error: state.applicants.error
});

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
