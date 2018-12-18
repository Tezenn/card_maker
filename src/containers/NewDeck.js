import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck } from '../redux/actions/index';

const btnStyle = {
  fontFamily: 'Lato',
  fontSize: '25px',
  border: '0px',
  marginTop: '4em',
  padding: '0.3em',
  color: 'white',
  backgroundColor: '#374a68',
  width: '40%',
  textTransform: 'uppercase',
  cursor: 'pointer',
  height: '3em',
  borderRadius: '4px',
  boxShadow: '3px 2px 10px 1px rgba(0, 0, 0, 0.75)'
};

const inputStyle = {
  fontFamily: 'Lato',
  textTransform: 'uppercase',
  width: '40%',
  fontSize: '20px',
  border: '0px',
  padding: '0.5em',
  boxShadow: '3px 2px 10px 1px rgba(0, 0, 0, 0.75)',
  borderRadius: '4px',
  textAlign: 'center',
  marginTop: '2em'
};

const labelStyle = {
  fontFamily: 'Lato',
  margin: '1em',
  textAlign: 'center',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  fontSize: '30px'
};

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
          <label style={labelStyle}>Name</label>
          <input
            style={inputStyle}
            type="text"
            name="name"
            required="required"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label style={labelStyle}>Number of Cards</label>
          <input
            style={inputStyle}
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button style={btnStyle}>Create Deck</button>
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
