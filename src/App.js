import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
