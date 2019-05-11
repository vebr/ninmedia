import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from '../components/Home';
import Cont from '../../containers/UpdateData';
import Thanks from '../components/Thanks';

const reload = () => window.location.reload();

const Index = () => (
  <Switch>
    <Route
      exact
      path="/belistbrekomendasi"
      onEnter={reload}
      render={props => (
        <Cont {...props} Layout={Home}/>
          
      )}
    />
    <Route
      exact
      onEnter={reload}
      path="/thanks"
      render={props => (
          <Thanks/>
      )}
    />
  </Switch>
);

export default Index;
