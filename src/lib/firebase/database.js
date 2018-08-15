
// import app, { firebase } from './index';
// import 'firebase/database';
import firebase from 'firebase';
import params from 'data/params.hjson';

firebase.initializeApp(params.firebaseConfig);

// Get a reference to the database service
const database = firebase.database();
// const database = app.database();

export default database;
