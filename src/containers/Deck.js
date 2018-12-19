import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { addCard, addImportedDeck } from '../redux/actions';
import { DeckStyle } from '../styles/style';

class Deck extends Component {
  newCard = {
    card_title: '',
    card_description: '',
    options: { color1: '#383232', color2: '#e34040', textColor: '#e7d6d6' }
  };

  render() {
    return (
      <div className="deck">
        <h1>{this.props.match.params.deckName}</h1>
        <h3>CLICK A CARD TO INSPECT OR EDIT IT</h3>
        <CardList
          deck={this.props.store.currentDeck}
          history={this.props.history}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            style={DeckStyle.btnStyle}
            onClick={() => {
              this.props.addCard({
                ...this.newCard,
                card_number: this.props.deckLength
              });
            }}
          >
            Add a new card
          </button>
          <button
            style={DeckStyle.btnStyle}
            onClick={() => {
              fetch('http://localhost:3100/makejson', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(this.props.store.currentDeck)
              })
                .then(response => response.json())
                .then(res => {
                  if (res.ok && res.ok === 'ok') {
                    window.open('http://localhost:3100/download');
                  }
                });
            }}
          >
            Export to json
          </button>
          <button
            style={DeckStyle.btnStyle}
            onClick={() => {
              this.props.addImportedDeck(this.props.store.currentDeck);
              alert('saved');
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
  deckLength: state.currentDeck.cards.length
});

const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(addCard(card)),
  addImportedDeck: deck => dispatch(addImportedDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
