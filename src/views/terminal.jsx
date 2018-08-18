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

  render() {
    console.log(this.props.rows);
    return (
      <div className="terminal">

        <div className="terminal-rows">
          {this.props.rows.map(row => (
            <div className="terminal-row">
              {row}
            </div>
          ))}
        </div>

        <div className="terminal-input">
          <span className="terminal-prompt">{this.props.prompt}</span>
          <input className="terminal-input-text" type="text" />
        </div>

      </div>
    );  
  }
}

export default Terminal;
