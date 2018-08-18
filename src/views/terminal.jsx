// terminal
// simple terminal component

import React from 'react';


class Terminal extends React.Component {

  state = {
  };

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }  
  _onKeyUp = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      console.log(e.target.value);
      this.props.handleInput(e.target.value)
    }
  }

  render() {
    return (
      <div className="terminal">

        <div className="terminal-rows">
          {this.props.rows.map(row => (
            <div key={row.msg} className="terminal-row">
              {row}
            </div>
          ))}
        </div>

        <div className="terminal-input">
          <span className="terminal-prompt">{this.props.prompt}</span>
          <input className="terminal-input-text" type="text" autoFocus onKeyUp={this._onKeyUp} />
        </div>

      </div>
    );  
  }
}

export default Terminal;
