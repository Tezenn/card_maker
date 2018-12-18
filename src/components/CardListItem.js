import React, { Component } from 'react';
import SingleCard from './SingleCard';

const cardStyle = {
  fontFamily: 'Lato',
  borderCollapse: 'collapse',
  overflowWrap: ' break-word',
  width: '350px',
  height: '500px',
  background: 'linear-gradient(to top right, #383232, #e34040)',
  display: 'flex',
  flexDirection: 'column',
  border: '2.5px solid black',
  textTransform: 'uppercase',
  borderRadius: '10px',
  color: '#e7d6d6'
};

class CardListItem extends Component {
  state = {
    showSingleCard: false
  };
  render() {
    return (
      <div
        style={{
          ...cardStyle,
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
