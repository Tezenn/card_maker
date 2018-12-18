import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './containers/Dashboard';
import NewDeck from './containers/NewDeck';
import Deck from './containers/Deck';
import SingleCard from './components/SingleCard';
import myDecks from './containers/MyDecks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{ width: '100%' }}>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/new_deck" component={NewDeck} />
            <Route exact path="/current_deck/:deckName" component={Deck} />
            <Route exact path="/card/:number" component={SingleCard} />
            <Route exact path="/myDecks" component={myDecks} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
