import React, { Component } from 'react';

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
  boxShadow: '3px 2px 10px 1px rgba(0, 0, 0, 0.75)'
};

const dashboardStyle = {
  marginTop: '4em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div style={dashboardStyle}>
          <button style={btnStyle}>My Decks</button>
          <button
            style={btnStyle}
            onClick={() => this.props.history.push('/new_deck')}
          >
            Create New Deck
          </button>
          <button style={btnStyle}>Import from JSON</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
