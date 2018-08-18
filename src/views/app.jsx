// yr

import React from 'react';
// import Terminal from 'terminal-in-react';
import dayjs from 'dayjs';

import Terminal from './terminal';
import SignIn from './signin';

import database from 'lib/firebase/database';
import { auth } from 'lib/firebase/auth';


const chat = database.ref('/chat');
const rooms = database.ref('/rooms');
const users = database.ref('/users');

const welcomeMessage = "Welcome to the dark forest. An ancient path leads onwards...";

// const commands = {
//   // glomp: () => alert("glomp glomp glomp!"),
//   // quirp: () => "quirp!",
//   // google: () => window.open('https://www.google.com/', '_blank'),
// };


class App extends React.Component {

  state = {
    user: null,
    rows: [],
  };

  componentDidMount() {

    const me = this;

    chat.on('child_added', data => {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      //. add pic url also
      const post = data.val();
      const msg = '[' + post.createdAt + '] ' + post.userName + ': ' + post.text;
      me.setState((state) => ({ rows: [...state.rows, msg] }));
    });

    auth.onAuthStateChanged( user => {
      // me.setState({ userId: user.uid, userName: user.displayName, userPic: user.photoURL });
      me.setState({ user });
    });
  }


  _handleInput = (str, print) => {

    // if (cmd[0] === 'review') {
    //   chat.once('value').then(function(snapshot) {
    //     const chatDict = snapshot.val();
    //     const chat = Object.values(chatDict);
    //     chat.forEach(s => print(s));
    //   });
    // } else {

    // const text = cmd.join(' '); //. dubious, but cmd is an array of words, not a string
    const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    //. store userId, then later lookup nickname and imgurl
    const post = {
      userId: this.state.user.uid,
      userName: this.state.user.displayName, //. ditch this
      text: str,
      createdAt,
    };
    // chat.push().set(post); // add message to chatlog
    this.setState({ lastPost: post }, () => chat.push().set(post));
    // const key = chat.push().set(post).key; // add message to chatlog and save key
    // this.setState({ lastPostKey: key });
  }

  _handleInput = (str) => {
    // console.log(e);
    alert(str);
  }
  
  render() {
    return (
      <div className="container">
        <SignIn />
        <Terminal rows={this.state.rows} handleInput={this._handleInput} prompt="> " />
      </div>
    );
  }
}

export default App;
