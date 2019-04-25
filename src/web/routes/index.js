import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from '../components/Home';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import Error from '../components/UI/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
          <Home {...props} />
      )}
    />
    <Route
      path="/success"
      render={props => (
        
        <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
      )}
    />
    <Route
      render={props => (
        <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
      )}
    />
  </Switch>
);

export default Index;
