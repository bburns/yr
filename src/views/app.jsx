// yr
// inspired by zork

import React from 'react';
import dayjs from 'dayjs';
import { auth, uiConfig } from 'lib/firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Terminal from './terminal';
// import SignIn from './signin';
import database from 'lib/firebase/database';
// import { auth } from 'lib/firebase/auth';
// import ding from 'assets/sounds/ding.mp3';
import ding from 'assets/sounds/phone.mp3';

const chat = database.ref('/chat');
// const rooms = database.ref('/rooms');
// const users = database.ref('/users');


// me.setState({ userId: user.uid, userName: user.displayName, userPic: user.photoURL });


const welcomeMessage = "Welcome to the dark forest. An ancient path leads onwards...";

function playSound() {
  const audio = new Audio(ding);
  audio.play();
}


// const commands = {
//   // glomp: () => alert("glomp glomp glomp!"),
//   // quirp: () => "quirp!",
//   // google: () => window.open('https://www.google.com/', '_blank'),
// };

let initialDataLoaded = false;

class App extends React.Component {

  state = {
    user: null,
    room: "The Blue Loft",
    rows: [],
  };

  componentDidMount() {

    const me = this;

    chat.on('child_added', data => {
      //. add pic url also
      if (initialDataLoaded) {
        const row = data.val();
        row.type = 'post';
        me.setState((state) => ({ rows: [...state.rows, row] }));
        playSound();
      }
    });

    auth.onAuthStateChanged( user => {
      me.setState({ user });
    });

    // Listen to the Firebase Auth state and set the local state.
    this.unregisterAuthObserver = auth.onAuthStateChanged(
        (user) => {
          this.setState(
            {user},
            () => { this._handleSignInSignOut(user) },
            // () => {
              // if (!this.state.windowReloaded) {
                // window.location.reload();
                // this.setState({windowReloaded: true});
              // }
            // },
          );
        }
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }  

  _showAll = () => {
    const me = this;
    chat.once('value').then(snapshot => {
      const chatDict = snapshot.val();
      const chatRows = Object.values(chatDict);
      chatRows.forEach(row => row.type = 'post');
      me.setState(() => ({ rows: chatRows }), () => initialDataLoaded = true);
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
        <SignIn user={this.state.user} onSignInSignOut={this._handleSignInSignOut} />
        <Terminal
          rows={this.state.rows}
          handleInput={this._handleInput}
          prompt="> "
          header={this.state.room}
        />
      </div>
    );
  }
}


const SignIn = (props) => {
  if (!props.user) {
    return (
      <div className="signin">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
  return (
    <div className="signin">
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  );  
}


export default App;
