import React, { Component } from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  state = {
    loggedIn : false
  }

  render(){
    return(
      <Switch>
        <Route path="/login">
          {this.state.loggedIn ? <Redirect to="/" /> : <Login setState={result => {this.setState({loggedIn: result})}} />}
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/">
          {this.state.loggedIn
            ? <div>
                <Nav />
                <Body />
              </div>
            : <Redirect to="/login" />}
          
        </Route>
      </Switch>
    );
  }
}

export default App;