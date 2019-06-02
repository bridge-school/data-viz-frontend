import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from './store/actions';

import './App.css';

import Header from './components/Header';
import CohortList from './components/CohortList';
import CohortDetail from './components/CohortDetail';


const App = (props) => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Switch>
          <Route exact path="/" component={CohortList} />
          <Route path="/cohorts/:id" component={CohortDetail} />
        </Switch>
        <button onClick={props.fetchData}>Click for API data (to be removed later)</button>
      </main>
    </>
  );
};

const mapStateToProps = state => ({
  results: state.results,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
