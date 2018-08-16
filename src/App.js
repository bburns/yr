// yr

import React from 'react';
import Terminal from 'terminal-in-react';
import './App.css';
import database from 'lib/firebase/database';


const chatRef = database.ref('/chat');

const welcomeMessage = "Welcome to the dark forest. An ancient path leads onwards...";

const commands = {
  glomp: () => alert("glomp glomp glomp!"),
  quirp: () => "quirp!",
  google: () => window.open('https://www.google.com/', '_blank'),
  hiii: () => hiii(),
  // pok,
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

function handleOtherCommands(cmd, print) {
  if (cmd[0] === 'pok') {
    chatRef.once('value').then(function(snapshot) {
      const chatDict = snapshot.val();
      const chat = Object.values(chatDict);
      chat.forEach(s => print(s));
    });
  } else {
    // print(cmd);
    const str = cmd.join(' '); // hmm
    chatRef.push().set(str);
  }
}



class App extends React.Component {

  componentDidMount() {
    chatRef.on('child_added', function(data) {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      console.log(data.val());
    });
  }

  render() {
    return (
      <div className="container">

        <Terminal
          commandPassThrough={handleOtherCommands}
          color="green"
          backgroundColor="black"
          barColor="black"
          commands={commands}
          descriptions={descriptions}
          msg={welcomeMessage}
          watchConsoleLogging
          promptSymbol="> "
        />

      </div>
    );
  }
}

export default App;
