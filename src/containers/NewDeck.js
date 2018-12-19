import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck } from '../redux/actions/index';
import { NewDeckStyle } from '../styles/style';

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
      cards.push({
        card_number: i,
        card_title: '',
        card_description: '',
        options: { color1: '#383232', color2: '#e34040', textColor: '#e7d6d6' }
      });
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
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onSubmit={this.handleSubmit}
        >
          <label style={NewDeckStyle.labelStyle}>Name</label>
          <input
            style={NewDeckStyle.inputStyle}
            type="text"
            name="name"
            required="required"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label style={NewDeckStyle.labelStyle}>Number of Cards</label>
          <input
            style={NewDeckStyle.inputStyle}
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button style={NewDeckStyle.btnStyle}>Create Deck</button>
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
