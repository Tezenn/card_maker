import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { editCard, editAllCards } from '../redux/actions/index';

const cardStyle = {
  fontFamily: 'Lato',
  width: '550px',
  height: '800px',
  borderCollapse: 'collapse',
  background: `linear-gradient(to top right, purple, yellow)`,
  display: 'flex',
  justifyContent: 'center',
  border: '2.5px solid black',
  borderRadius: '10px'
};

const optionStyle = {
  marginLeft: '2em',
  flexDirection: 'column',
  fontFamily: 'Lato',
  textAlign: 'center',
  width: '500px',
  height: '800px',
  background: 'linear-gradient(to top right, white, grey)',
  display: 'flex',
  border: '2.5px solid black',
  borderRadius: '10px'
};

const inputStyle = {
  fontFamily: 'Lato',
  width: '60%',
  fontSize: '20px',
  border: '0px',
  padding: '0.5em',
  boxShadow: '10px 10px 32px -1px rgba(0,0,0,0.75)',
  borderRadius: '4px'
};

const labelStyle = {
  fontFamily: 'Lato',
  margin: '1em',
  textAlign: 'center',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  fontSize: '30px'
};
const btnStyle = {
  fontFamily: 'Lato',
  fontSize: '25px',
  border: '0px',
  marginTop: '2em',
  padding: '0.3em',
  color: 'white',
  backgroundColor: '#374a68',
  width: '45%',
  textTransform: 'uppercase',
  cursor: 'pointer',
  height: '3em',
  borderRadius: '4px',
  boxShadow: '10px 10px 32px -1px rgba(0,0,0,0.75)'
};

const colorInput = {
  border: '0px',
  width: '50%',
  height: '2em'
};

const background = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#00000088',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000
};

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
        style={background}
        onClick={e => {
          this.props.onClose();
          e.stopPropagation();
        }}
      >
        <div
          style={{
            ...cardStyle,
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
              <label style={labelStyle} htmlFor="card_title">
                Card Title
              </label>
              <input
                type="text"
                style={inputStyle}
                name="card_title"
                id="card_title"
                placeholder="title"
                value={this.state.card.card_title}
                onChange={this.handleChange}
              />
              <label style={labelStyle} htmlFor="card_description">
                Card Description
              </label>
              <textarea
                type="text"
                style={{ ...inputStyle, height: '15em' }}
                name="card_description"
                id="card_description"
                placeholder="description"
                value={this.state.card.card_description}
                onChange={this.handleChange}
              />
              <button style={btnStyle}>Save your card</button>
            </form>
          </div>
        </div>
        <div style={optionStyle} onClick={e => e.stopPropagation()}>
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
            <label style={labelStyle} htmlFor="color1">
              Background Color 1
            </label>
            <input
              style={colorInput}
              type="color"
              name="color1"
              id="color1"
              value={this.state.card.options.color1}
              onChange={this.handleColor}
            />
            <label style={labelStyle} htmlFor="color2">
              Background Color 2
            </label>
            <input
              style={colorInput}
              type="color"
              name="color2"
              id="color2"
              value={this.state.card.options.color2}
              onChange={this.handleColor}
            />
            <label style={labelStyle} htmlFor="textColor">
              Text Color
            </label>
            <input
              style={colorInput}
              type="color"
              name="textColor"
              id="textColor"
              value={this.state.card.options.textColor}
              onChange={this.handleColor}
            />
            <button style={btnStyle}>Set this card</button>
            <button
              type="button"
              onClick={() => {
                this.props.editCard(this.state.card);
                this.props.editAllCards(this.state.card.options);
                this.props.onClose();
              }}
              style={btnStyle}
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
