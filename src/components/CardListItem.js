import React, { Component } from 'react';
import SingleCard from './SingleCard';
import { CardListItemStyle } from '../styles/style';

class CardListItem extends Component {
  state = {
    showSingleCard: false
  };
  render() {
    return (
      <div
        style={{
          ...CardListItemStyle.cardStyle,
          background: `linear-gradient(to top right, ${
            this.props.item.options.color1
          }, ${this.props.item.options.color2})`,
          color: `${this.props.item.options.textColor}`
        }}
        onClick={() => {
          this.setState({ showSingleCard: true });
        }}
      >
        <h4># {this.props.item.card_number}</h4>
        <h2>{this.props.item.card_title}</h2>
        <h4 style={{ padding: '0em 2em', marginTop: '4em' }}>
          {this.props.item.card_description}
        </h4>
        {this.state.showSingleCard && (
          <SingleCard
            item={this.props.item}
            onClose={() => {
              this.setState({ showSingleCard: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default CardListItem;
