// auth
// firebase authentication library

import app, { firebase } from './index';
import 'firebase/auth';

export const auth = app.auth();

// config for FirebaseAuthUI
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Redirect after sign-in.
    signInSuccessWithAuthResult: () => true,
  },
};
