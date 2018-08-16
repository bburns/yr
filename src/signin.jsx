// SignIn
// Show SignIn info

import React from 'react';
import { auth, uiConfig } from 'lib/firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './signin.css';

// sign up with email and sign in with email, facebook, google
const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
);

export default SignIn;
// export default userIsNotAuthenticated(SignIn);
