// terminal
// simple terminal component

import React from 'react';


class Terminal extends React.Component {

  state = {
  };

  _onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.handleInput(e.target.value)
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="terminal">

        <div className="terminal-header">
          {this.props.header}
        </div>

        <div className="terminal-rows">
          {this.props.rows.map(row => {
            if (row.type === 'post') {
              const { createdAt, userName, text } = row;
              return (
                <div key={createdAt} className="terminal-row">
                  <span className="terminal-post-header">
                    <span className="terminal-post-createdAt">{createdAt}</span>
                    {/* <span className="terminal-post-userPic">{userPic}</span> */}
                    <span className="terminal-post-userName">{(userName || 'undefined') + ':'}</span>
                  </span>
                  <span className="terminal-post-text">{text}</span>
                </div>
              );
            }
          })}
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
