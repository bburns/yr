// SignIn
// Show SignIn info

import React from 'react';
import { auth, uiConfig } from 'lib/firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


class SignIn extends React.Component {

  state = {
    isSignedIn: false,
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(
        (user) => {
          this.setState(
            {isSignedIn: !!user},
            // () => window.location.reload()
          );
        }
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }  

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="signin">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      );
    }
    return (
      <div className="signin">
        {/* this works but needs styling */}
        {/* <p>Welcome {auth.currentUser.displayName}!</p> */}
        <button onClick={() => auth.signOut()}>Signout</button>
      </div>
    );  
  }
}

export default SignIn;
// export default userIsNotAuthenticated(SignIn); //. ?
