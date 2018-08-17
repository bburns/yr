// auth
// firebase authentication library

import app, { firebase } from './index';
import 'firebase/auth';

export const auth = app.auth();

// config for FirebaseAuthUI
// see https://firebase.google.com/docs/auth/web/firebaseui#sign_in
export const uiConfig = {
  // signInFlow: 'redirect',
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Redirect after sign-in.
    // User successfully signed in.
    // Return type determines whether we continue the redirect automatically
    // or whether we leave that to developer to handle.
    // signInSuccessWithAuthResult: () => true,
    signInSuccessWithAuthResult: () => false,
    // uiShown: function() {
    //   // The widget is rendered.
    //   // Hide the loader.
    //   document.getElementById('loader').style.display = 'none';
    // }
  },  
  // // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
};
