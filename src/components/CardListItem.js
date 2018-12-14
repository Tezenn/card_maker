import React, { Component } from 'react';

class CardListItem extends Component {
  render() {
    return (
      <div
        className="card_list_item"
        onClick={() =>
          this.props.history.push('/card/' + this.props.item.card_number)
        }
      >
        card list item
        <h4>card#: {this.props.item.card_number}</h4>
        <h4>card name: {this.props.item.card_title}</h4>
        <h4>card description: {this.props.item.card_description}</h4>
      </div>
    );
  }
}

export default CardListItem;
