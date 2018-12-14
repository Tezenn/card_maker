import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../redux/actions/index';

const cardStyle = {
  width: '650px',
  heigth: '450px',
  backgroundColor: 'grey'
};

class SingleCard extends Component {
  state = {
    card: this.props.store.currentDeck.cards[this.props.match.params.number]
  };

  handleChange = e => {
    this.setState({
      card: { ...this.state.card, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editCard(this.state.card);
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="single_card" style={cardStyle}>
        <h2>
          card#
          {
            this.props.store.currentDeck.cards[this.props.match.params.number]
              .card_number
          }
        </h2>
        <div className="card_edit_form">
          <form
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label>Card Title:</label>
            <input
              type="text"
              name="card_title"
              placeholder="card title"
              value={this.state.card.title}
              onChange={this.handleChange}
            />
            <label>Card Description:</label>
            <input
              type="text"
              name="card_description"
              placeholder="card description"
              value={this.state.card.description}
              onChange={this.handleChange}
            />
            <button>Save your card</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCard);
