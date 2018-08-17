// yr

import React from 'react';
import Terminal from 'terminal-in-react';
import dayjs from 'dayjs';

import database from 'lib/firebase/database';
import { auth } from 'lib/firebase/auth';
import SignIn from './signin';
import './App.css';


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
  show: false,
};

function hiii() {
  return "hiii";
}





class App extends React.Component {

  state = {
    userId: null,
    userName: null,
    userPic: null,
  };

  componentDidMount() {

    chatRef.on('child_added', function(data) {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      //. echo unless we wrote the message
      // console.log(data.val());
      const post = data.val();
      //. add pic url also
      // const datetime = dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss');
      // const msg = post.userName + ' [' + datetime + ']: ' + post.text;
      const msg = post.userName + ' [' + post.createdAt + ']: ' + post.text;
      console.log(msg);
    });

    const me = this;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        me.setState({ userId: user.uid, userName: user.displayName, userPic: user.photoURL });
      } else {
        me.setState({ userId: null, userName: null, userPic: null });
      }
    });
  }

  _handleOtherCommands = (cmd, print) => {

    // if (cmd[0] === 'review') {
    //   chatRef.once('value').then(function(snapshot) {
    //     const chatDict = snapshot.val();
    //     const chat = Object.values(chatDict);
    //     chat.forEach(s => print(s));
    //   });
    // } else {

    const text = cmd.join(' '); //. dubious, but cmd is an array of words, not a string
    const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const post = {
      userName: this.state.userName,
      text,
      createdAt,
    };
    chatRef.push().set(post);
  }
  
  render() {
    return (
      <div className="container">

        <SignIn />
        <Terminal
          commandPassThrough={this._handleOtherCommands}
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
