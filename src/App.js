import React, { Component } from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render(){
    return(
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/">
          <div>
            <Nav />
            <Body />
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;