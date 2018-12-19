import React, { Component } from 'react';
import { addImportedDeck } from '../redux/actions';
import { connect } from 'react-redux';

const btnStyle = {
  fontFamily: 'Lato',
  fontSize: '25px',
  border: '0px',
  marginTop: '2em',
  padding: '0.3em',
  color: 'white',
  backgroundColor: '#374a68',
  width: '30%',
  textTransform: 'uppercase',
  cursor: 'pointer',
  height: '3em',
  borderRadius: '4px',
  boxShadow: '3px 2px 10px 1px rgba(0, 0, 0, 0.75)'
};

const labelStyle = {
  fontFamily: 'Lato',
  fontSize: '25px',
  border: '0px',
  padding: '0.3em',
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  alignItems: 'center',
  backgroundColor: 'rgb(55, 74, 104)',
  textTransform: 'uppercase',
  cursor: 'pointer',
  height: '2.4em',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.75) 3px 2px 10px 1px'
};

const dashboardStyle = {
  marginTop: '12em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

class Dashboard extends Component {
  fileInput = React.createRef();

  sendJson = () => {
    if (this.fileInput.current.files[0]) {
      let x = this.fileInput.current.files[0];
      var reader = new FileReader();
      // Closure to capture the file information.
      reader.onload = (theFile => {
        return e => {
          // Render thumbnail.
          const JsonObj = JSON.parse(e.target.result);
          this.props.addImportedDeck(JsonObj);
          alert('deck imported');
        };
      })(x);

      reader.readAsText(x);
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <div style={dashboardStyle}>
          <button
            onClick={() => this.props.history.push('/mydecks')}
            style={btnStyle}
          >
            My Decks
          </button>
          <button
            style={btnStyle}
            onClick={() => this.props.history.push('/new_deck')}
          >
            Create New Deck
          </button>
          <form
            style={{
              width: '30%',
              marginTop: '2.5em'
            }}
          >
            <label style={labelStyle} htmlFor="jsonfile">
              Import from JSON
            </label>
            <input
              ref={this.fileInput}
              id="jsonfile"
              onChange={() => this.sendJson()}
              type="file"
              accept=".json"
              style={{ display: 'none' }}
            />
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
  addImportedDeck: deck => dispatch(addImportedDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
