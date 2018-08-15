// yr

import React from 'react';
import Terminal from 'terminal-in-react';
import './App.css';
import database from 'lib/firebase/database';

const welcomeMessage = "Welcome to the dark forest. An ancient path leads onwards...";

const commands = {
  glomp: () => alert("glomp glomp glomp!"),
  quirp: () => "quirp!",
  google: () => window.open('https://www.google.com/', '_blank'),
  hiii: () => hiii(),
};

const descriptions = {
  glomp: "glomp-attack!",
  quirp: "a blue mushroom",
  google: "search google.com",
  hiii: "say hiii",
};

function hiii() {
  return "hiii";
}


class App extends React.Component {

  render() {
    return (
      <div className="container">

        <Terminal
          commandPassThrough={cmd => cmd}
          color="green"
          backgroundColor="black"
          barColor="black"
          commands={commands}
          descriptions={descriptions}
          msg={welcomeMessage}
          watchConsoleLogging={false}
          promptSymbol="> "
        />

      </div>
    );
  }
}

export default App;
