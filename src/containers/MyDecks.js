import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck, removeDeck } from '../redux/actions';
import { MyDeckStyle } from '../styles/style';

class MyDecks extends Component {
  selectDeck = el => {
    this.props.addNewDeck(el);
    this.props.history.push(`/current_deck/${el.name}`);
  };

  render() {
    return (
      <div style={MyDeckStyle.divStyle}>
        <h1>YOUR DECKS</h1>
        <ul style={{ padding: '0', width: '40%' }}>
          {this.props.store.myDecks.length > 0 ? (
            this.props.store.myDecks.map(el => {
              return (
                <div style={MyDeckStyle.deckStyle} key={Math.random()}>
                  <h1
                    style={MyDeckStyle.liStyle}
                    onClick={() => this.selectDeck(el)}
                  >
                    {el.name}
                  </h1>
                  <button
                    style={MyDeckStyle.btnStyle}
                    onClick={() => this.props.removeDeck(el)}
                  >
                    X
                  </button>
                </div>
              );
            })
          ) : (
            <div style={MyDeckStyle.deckStyle}>
              <h3>NO DECKS IN MEMORY</h3>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  addNewDeck: deck => dispatch(addNewDeck(deck)),
  removeDeck: deck => dispatch(removeDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDecks);
