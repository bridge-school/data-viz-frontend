import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import CohortList from './components/CohortList';
import CohortDetail from './components/CohortDetail';

const App = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Switch>
          <Route exact path="/" component={CohortList} />
          <Route path="/cohorts/:id" component={CohortDetail} />
        </Switch>
      </main>
    </>
  );
};
export default App;
