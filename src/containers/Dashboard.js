import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="buttons">
          <button>My Decks</button>
          <button onClick={() => this.props.history.push('/new_deck')}>
            Create New Deck
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
