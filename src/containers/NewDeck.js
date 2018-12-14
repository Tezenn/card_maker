import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck } from '../redux/actions/index';

class NewDeck extends Component {
  state = {
    name: '',
    quantity: 0,
    cards: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let cards = [];
    for (let i = 0; i < this.state.quantity; i++) {
      cards.push({ card_number: i, card_title: '', card_description: '' });
    }
    this.setState({ cards }, () => {
      this.props.addNewDeck(this.state);
      this.props.history.push('/current_deck/' + this.state.name);
    });
  };

  render() {
    return (
      <div className="new_deck">
        <h2>Here you can create a new deck</h2>
        <form onSubmit={this.handleSubmit}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <span>Number of Cards</span>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button>Create Deck</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  addNewDeck: deck => dispatch(addNewDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
