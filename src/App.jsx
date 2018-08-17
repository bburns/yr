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
  // glomp: () => alert("glomp glomp glomp!"),
  // quirp: () => "quirp!",
  // google: () => window.open('https://www.google.com/', '_blank'),
  // hiii: () => hiii(),
  // pok,
};

const descriptions = {
  // glomp: "glomp-attack!",
  // quirp: "a blue mushroom",
  // google: "search google.com",
  // hiii: "say hiii",
  show: false,
};

// function hiii() {
//   return "hiii";
// }





class App extends React.Component {

  state = {
    userId: null,
    userName: null,
    userPic: null,
    // lastPostKey: null,
    lastPost: null,
  };


  componentDidMount() {

    const me = this;

    chatRef.on('child_added', function(data) {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      //. log unless we just wrote the message!
      //. add pic url also
      // console.log(data);
      const post = data.val();
      // console.log(post);
      // if (me.state.lastPostKey !== data.key) {
      // if (me.state.lastPost !== post) {
      const lastPost = me.state.lastPost;
      if (lastPost && lastPost.userName === post.userName && lastPost.createdAt === post.createdAt) {
        console.log('(sent ' + post.createdAt + ')');
      } else {
        const msg = post.userName + ' [' + post.createdAt + ']: ' + post.text;
        console.log(msg);
      }
    });

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
    //. store userId not userName, lookup nickname and imgurl
    const post = {
      userId: this.state.userId,
      userName: this.state.userName, //. ditch this
      text,
      createdAt,
    };
    // chatRef.push().set(post); // add message to chatlog
    this.setState({ lastPost: post }, () => chatRef.push().set(post));
    // const key = chatRef.push().set(post).key; // add message to chatlog and save key
    // this.setState({ lastPostKey: key });
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
