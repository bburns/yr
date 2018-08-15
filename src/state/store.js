// store
// Create a redux store, which holds all the state for the app.

// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // so can use with chrome extension
// import { autoRehydrate } from 'redux-persist'; // automatically persist parts of store to localStorage
// import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk'; // allows async actions
// import { createLogger } from 'redux-logger'; // logs before, action, and after states

import reducers from './reducers';
// import analytics from './middleware/analytics';


// get list of middleware handlers
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [];
// middlewares.push(analytics);
// middlewares.push(sagaMiddleware);
// middlewares.push(thunk); // allows async actions
// const logger = createLogger();
// middlewares.push(logger); // shows before, action and after states in console - very verbose!

// get combined reducer
// see https://github.com/reactjs/redux/blob/master/docs/api/combineReducers.md
const reducer = combineReducers(reducers);

// get initial state
const preloadedState = undefined;

// get store enhancers
// see https://github.com/reactjs/redux/blob/master/docs/api/applyMiddleware.md
// const middlewareEnhancer = applyMiddleware(...middlewares);
// const hydrateEnhancer = autoRehydrate(); //. ditch this in favor of userdb?
// const enhancers = composeWithDevTools(
//   middlewareEnhancer,
//   // hydrateEnhancer,
// );

// create the store
// see https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
// const store = createStore(reducer, preloadedState, enhancers);
const store = createStore(reducer, preloadedState);

// rehydrate the store from localStorage and begin periodically persisting it
// // note: normally would do this here but we need to load the map before loading the store,
// //       so do this in Home.handleMapLoaded
// can do this here now since not using the google map search api
// const persistBlacklist = ['home', 'search', 'ui']; // don't persist these parts of the store - transient
// const persistCallback = () => {
//   console.log('rehydration complete');
// };
// const options = { blacklist: persistBlacklist };
// persistStore(store, options, persistCallback);

export default store;
