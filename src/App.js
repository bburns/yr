import React from 'react';
import Terminal from 'terminal-in-react';


class App extends React.Component {

  showMsg = () => 'Hello World';

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            // 'open-google': () => window.open('https://www.google.com/', '_blank'),
            // showmsg: this.showMsg,
            // popup: () => alert('Terminal in React'),
            glomp: () => alert("glomp glomp glomp!"),
          }}
          descriptions={{
            // 'open-google': 'opens google.com',
            // showmsg: 'shows a message',
            // alert: 'alert', popup: 'alert',
            glomp: "glomp-attack!",
          }}
          msg="Welcome to the dark forest. An ancient path leads onwards..."
        />
      </div>
    );
  }
}

export default App;
