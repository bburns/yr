// reducers
// Combine reducers into one.

// import { combineReducers } from 'redux';

// each piece of state needs a reducer
import ui from './ducks/ui';
// import firebase from './ducks/firebase';
// import search from './ducks/search';
// import details from './ducks/details';

const reducers = {
  ui: ui.reducer,
  // firebase: firebase.reducer,
  // [search.constants.NAME]: search.reducer,
  // [details.constants.NAME]: details.reducer,
};

export default reducers;
