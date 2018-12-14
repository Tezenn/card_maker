import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

class Deck extends Component {
  render() {
    return (
      <div className="deck">
        <h1>{this.props.match.params.deckName}</h1>
        <CardList
          deck={this.props.store.currentDeck}
          history={this.props.history}
        />
        <button>Add a new card</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
