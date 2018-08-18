// yr

import React from 'react';
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
    header: "The Blue Loft",
    rows: [],
  };

  componentDidMount() {

    const me = this;

    chat.on('child_added', data => {
      //. add pic url also
      const row = data.val();
      row.type = 'post';
      // const msg = '[' + post.createdAt + '] ' + post.userName + ': ' + post.text;
      // me.setState((state) => ({ rows: [...state.rows, msg] }));
      me.setState((state) => ({ rows: [...state.rows, row] }));
    });

    auth.onAuthStateChanged( user => {
      // me.setState({ userId: user.uid, userName: user.displayName, userPic: user.photoURL });
      me.setState({ user });
    });
  }

  //.. this works but duplicates work of other fn on first load, so had to set rows:[]
  _showAll = () => {
    const me = this;
    chat.once('value').then(snapshot => {
      me.setState({rows:[]}, (state) => {
        console.log(snapshot);
        const chatDict = snapshot.val();
        console.log(chatDict);
        const chatRows = Object.values(chatDict);
        console.log(chatRows);
        // chat.forEach(s => print(s));
        chatRows.forEach(row => {
          row.type = 'post';
          me.setState((state) => ({ rows: [...state.rows, row] }));
        });
      });
    });
  }

  _hideAll = () => {
    this.setState({rows:[]});
  }

  _handleSignInSignOut = (user) => {
    if (user) {
      this._showAll();
    } else {
      this._hideAll();
    }
    // window.location.reload();
  }

  _handleInput = (str) => {

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
  
  render() {
    return (
      <div className="container">
        <SignIn onSignInSignOut={this._handleSignInSignOut} />
        <Terminal
          rows={this.state.rows}
          handleInput={this._handleInput}
          prompt="> "
          header={this.state.header}
        />
      </div>
    );
  }
}

export default App;
