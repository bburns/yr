// terminal
// simple terminal component

import React from 'react';
import dayjs from 'dayjs';


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
              const { createdAt, userName, userPic, text } = row;
              // see https://github.com/iamkun/dayjs/blob/master/docs/en/API-reference.md#list-of-all-available-formats
              const datetime = dayjs(createdAt).format("MMM D ddd h:mma"); // eg 'Aug 18 Sat 5:45pm'
              const username = userName === 'Brian Burns' ? 'Brian' : 'Amanda';
              return <Post key={createdAt} datetime={datetime} username={username} userpic={userPic} text={text} />;
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

const Post = (props) => (
  <div className="terminal-row">
    <span className="terminal-post-header">
      <span className="terminal-post-datetime">{props.datetime}</span>
      <img className="terminal-post-userpic" src={props.userpic} />
      <span className="terminal-post-username">{props.username + ':'}</span>
    </span>
    <span className="terminal-post-text">{props.text}</span>
  </div>
);


export default Terminal;
