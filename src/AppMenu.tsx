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
                  <li><Link to="/Nadege">Nadege</Link></li>
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

class AdminLink extends React.Component<{}> {
  render() {
    return (
      <li><Link to="/dashboard">Dashboard</Link></li>
    )
  }
}

class NadComp extends React.Component<{}> {
   render() {
    return (
      fakeAuth.isAuthenticated ? (<AdminLink />) : 
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