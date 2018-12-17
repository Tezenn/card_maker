import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardListItem from './CardListItem';

class CardList extends Component {
  render() {
    return (
      <div className="card_list_component">
        <div className="card_list">
          {this.props.deck.cards &&
            this.props.deck.cards.map(el => (
              <CardListItem
                history={this.props.history}
                item={el}
                key={el.card_number}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
