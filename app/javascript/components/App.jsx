import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalProvider } from '../contexts/GlobalContext';
import Nav from './Nav';
import Home from './Home';
import Edit from './Edit';

export default () => {
  return (
    <Router>
      <GlobalProvider>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/edit/:name' component={Edit} />
        </Switch>
      </GlobalProvider>
    </Router>
  );
}
