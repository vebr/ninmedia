import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from '../components/Home';
import Cont from '../../containers/UpdateData';
import Thanks from '../components/Thanks';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <Cont {...props} Layout={Home}/>
          
      )}
    />
    <Route
      exact
      path="/thanks"
      render={props => (
          <Thanks/>
      )}
    />
  </Switch>
);

export default Index;
