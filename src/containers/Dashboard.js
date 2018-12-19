import React, { Component } from 'react';
import { addImportedDeck } from '../redux/actions';
import { connect } from 'react-redux';
import { DashboardStyle } from '../styles/style';

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
        <div style={DashboardStyle.dashboardStyle}>
          <button
            onClick={() => this.props.history.push('/mydecks')}
            style={DashboardStyle.btnStyle}
          >
            My Decks
          </button>
          <button
            style={DashboardStyle.btnStyle}
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
            <label style={DashboardStyle.labelStyle} htmlFor="jsonfile">
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
