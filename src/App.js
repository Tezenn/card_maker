import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './containers/Dashboard';
import NewDeck from './containers/NewDeck';
import Deck from './containers/Deck';
import SingleCard from './components/SingleCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/new_deck" component={NewDeck} />
            <Route exact path="/current_deck/:deckName" component={Deck} />
            <Route exact path="/card/:number" component={SingleCard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
