import React from 'react';
import { withRouter } from 'react-router-dom';

const headerStyle = {
  width: '100%',
  height: '6em',
  marginTop: '0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#374a68',
  color: 'white',
  userSelect: 'none'
};
const Header = props => (
  <div className="header" style={headerStyle}>
    <h1
      onClick={() => props.history.push('/')}
      style={{
        fontSize: '45px',
        cursor: 'pointer'
      }}
    >
      CARD GAME MAKER
    </h1>
  </div>
);

export default withRouter(Header);
