// SignIn
// Show SignIn info

import React from 'react';
import { auth, uiConfig } from 'lib/firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './signin.css';

// sign up with email and sign in with email, facebook, google
class SignIn extends React.Component {
  state = {
    isSignedIn: false,
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }  

  render() {
    if (!this.state.isSignedIn) {
      return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      );
    }
    return (
      <div>
        {/* <p>Welcome {auth.currentUser.displayName}!</p> */}
        {/* <button onClick={() => auth.signOut()}>Signout</button> */}
      </div>
    );  
  }
}

export default SignIn;
// export default userIsNotAuthenticated(SignIn);
