import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { editCard, editAllCards } from '../redux/actions/index';
import { SingleCardStyle } from '../styles/style';

class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
    this.modalRoot = document.getElementById('root-modal');
    this.modalRoot.appendChild(this.element);
  }
  state = {
    card: { ...this.props.item }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyup, false);
    this.modalRoot.removeChild(this.element);
  }

  keyUp = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleChange = e => {
    this.setState({
      card: { ...this.state.card, [e.target.name]: e.target.value }
    });
  };

  handleColor = e => {
    this.setState({
      card: {
        ...this.state.card,
        options: { ...this.state.card.options, [e.target.name]: e.target.value }
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editCard(this.state.card);
    this.props.onClose();
  };

  render() {
    return ReactDOM.createPortal(this._renderSingleCard(), this.element);
  }

  _renderSingleCard() {
    return (
      <div
        style={SingleCardStyle.background}
        onClick={e => {
          this.props.onClose();
          e.stopPropagation();
        }}
      >
        <div
          style={{
            ...SingleCardStyle.cardStyle,
            background: `linear-gradient(to top right, ${
              this.state.card.options.color1
            }, ${this.state.card.options.color2})`,
            color: `${this.state.card.options.textColor}`
          }}
          onClick={e => e.stopPropagation()}
        >
          {/*  <h2>card# {this.state.card.card_number}</h2> */}
          <div className="card_edit_form">
            <form
              onSubmit={this.handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <label style={SingleCardStyle.labelStyle} htmlFor="card_title">
                Card Title
              </label>
              <input
                type="text"
                style={SingleCardStyle.inputStyle}
                name="card_title"
                id="card_title"
                placeholder="title"
                value={this.state.card.card_title}
                onChange={this.handleChange}
              />
              <label
                style={SingleCardStyle.labelStyle}
                htmlFor="card_description"
              >
                Card Description
              </label>
              <textarea
                type="text"
                style={{ ...SingleCardStyle.inputStyle, height: '15em' }}
                name="card_description"
                id="card_description"
                placeholder="description"
                value={this.state.card.card_description}
                onChange={this.handleChange}
              />
              <button style={SingleCardStyle.btnStyle}>Save your card</button>
            </form>
          </div>
        </div>
        <div
          style={SingleCardStyle.optionStyle}
          onClick={e => e.stopPropagation()}
        >
          <h1>SYLE SETTINGS</h1>
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textTransform: 'uppercase'
            }}
          >
            <label style={SingleCardStyle.labelStyle} htmlFor="color1">
              Background Color 1
            </label>
            <input
              style={SingleCardStyle.colorInput}
              type="color"
              name="color1"
              id="color1"
              value={this.state.card.options.color1}
              onChange={this.handleColor}
            />
            <label style={SingleCardStyle.labelStyle} htmlFor="color2">
              Background Color 2
            </label>
            <input
              style={SingleCardStyle.colorInput}
              type="color"
              name="color2"
              id="color2"
              value={this.state.card.options.color2}
              onChange={this.handleColor}
            />
            <label style={SingleCardStyle.labelStyle} htmlFor="textColor">
              Text Color
            </label>
            <input
              style={SingleCardStyle.colorInput}
              type="color"
              name="textColor"
              id="textColor"
              value={this.state.card.options.textColor}
              onChange={this.handleColor}
            />
            <button style={SingleCardStyle.btnStyle}>Set this card</button>
            <button
              type="button"
              onClick={() => {
                this.props.editCard(this.state.card);
                this.props.editAllCards(this.state.card.options);
                this.props.onClose();
              }}
              style={SingleCardStyle.btnStyle}
            >
              Set all cards
            </button>
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
  editCard: card => dispatch(editCard(card)),
  editAllCards: options => dispatch(editAllCards(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCard);
