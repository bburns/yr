// yr

import React from 'react';
import Terminal from 'terminal-in-react';
import './App.css';


const welcomeMessage = "Welcome to the dark forest. An ancient path leads onwards...";

const commands = {
  glomp: () => alert("glomp glomp glomp!"),
  quirp: () => alert("quirp!"),
  // 'open-google': () => window.open('https://www.google.com/', '_blank'),
};

const descriptions = {
  glomp: "glomp-attack!",
  quirp: "a blue mushroom",
  // 'open-google': 'opens google.com',
  // alert: 'alert',
};


class App extends React.Component {

  // style={{ fontWeight: "bold", fontSize: "1em" }}
  render() {
    return (
      <div className="container">
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          commands={commands}
          descriptions={descriptions}
          msg={welcomeMessage}
        />
      </div>
    );
  }
}

export default App;
