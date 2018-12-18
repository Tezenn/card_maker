import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck, removeDeck } from '../redux/actions';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const deckStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  listStyleType: 'none',
  marginTop: '1.5em'
};

const liStyle = {
  fontFamily: 'Lato',
  fontSize: '30px',
  border: '0px',
  textTransform: 'uppercase',
  cursor: 'pointer'
};

const btnStyle = {
  fontFamily: 'Lato',
  fontSize: '17px',
  border: '0px',
  padding: '0.3em',
  color: 'white',
  width: '3em',
  backgroundColor: '#374a68',
  textTransform: 'uppercase',
  cursor: 'pointer',
  borderRadius: '4px',
  boxShadow: '3px 2px 10px 1px rgba(0, 0, 0, 0.75)'
};

class MyDecks extends Component {
  selectDeck = el => {
    this.props.addNewDeck(el);
    this.props.history.push(`/current_deck/${el.name}`);
  };

  render() {
    return (
      <div style={divStyle}>
        <h1>YOUR DECKS</h1>
        <ul style={{ padding: '0', width: '40%' }}>
          {this.props.store.myDecks.length > 0 ? (
            this.props.store.myDecks.map(el => {
              return (
                <div style={deckStyle} key={Math.random()}>
                  <h1 style={liStyle} onClick={() => this.selectDeck(el)}>
                    {el.name}
                  </h1>
                  <button
                    style={btnStyle}
                    onClick={() => this.props.removeDeck(el)}
                  >
                    X
                  </button>
                </div>
              );
            })
          ) : (
            <div style={deckStyle}>
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
