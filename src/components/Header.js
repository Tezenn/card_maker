import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderStyle } from '../styles/style';

const Header = props => (
  <div className="header" style={HeaderStyle.headerStyle}>
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
