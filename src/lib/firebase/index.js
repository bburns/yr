// firebase

import firebase from 'firebase/app';
import params from 'data/params.hjson';

// setup firebase app
const app = firebase.initializeApp(params.firebaseConfig);

// export default app;
export { app as default, firebase };
