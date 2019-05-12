import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from '../components/Home';
import Cont from '../../containers/UpdateData';
import LoginContainer from '../../containers/Login';
import Thanks from '../components/Thanks';
import LoginComponent from '../components/backoffice/Login'
import PrivateRoute from '../components/backoffice/PrivateRoute'
import BoContainer from '../../containers/Member';
import BoComponent from '../components/backoffice/Dashboard'
import CreatePrivateRoute from '../components/backoffice/CreatePrivateRoute';

const reload = () => {console.log("called")}

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
 <PrivateRoute exact path="/backoffice" component={BoContainer} layout={BoComponent} title="Backoffice"/>
  <CreatePrivateRoute exact path="/backoffice/login" component={LoginContainer} layout={LoginComponent} title="Login backoffice Ninmedia" comp="login"/>
  </Switch>
);

export default Index;
