import * as React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect, RouteComponentProps} from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';

class AppMenu extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <NadComp />
              </ul>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </Router>
        
        );
    }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate() {
    fakeAuth.isAuthenticated = true;
  }
};

class DashboardLinkMenu extends React.Component<{}> {
  render() {
    return (
      <li><Link to="/dashboard">Dashboard</Link></li>
    )
  }
}

class NadComp extends React.Component<{}> {
   render() {
    return (
      fakeAuth.isAuthenticated ? (<DashboardLinkMenu />) : 
      (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    );
  }
}

export default AppMenu;