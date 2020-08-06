import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Edit from './Edit';

export default () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit/:name" component={Edit} />
      </Switch>
    </Router>
  )
}
