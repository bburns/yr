// terminal
// simple terminal component

import React from 'react';


class Terminal extends React.Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }  

  render() {
    return (
      <div>
        {this.props.rows.map(row => (
          <div>
            {row}
          </div>
        ))}
      </div>
    );  
  }
}

export default Terminal;
