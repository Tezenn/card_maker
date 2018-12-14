import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleCard extends Component {
  render() {
    return (
      <div className="single_card">
        card#{' '}
        {
          this.props.store.currentDeck.cards[this.props.match.params.number]
            .card_number
        }
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
)(SingleCard);
