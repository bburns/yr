import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provide Redux store to all components

import './index.css';
import App from './App';
import store from 'state/store';

// get tree of ui elements
// note: jsx code like this gets converted to React.createElement calls by Babel -
// those calls return plain js objects, which ReactDOM renders to the DOM.
const elements = (
  <Provider store={store}>
    <App />
  </Provider>
);

// render the ui elements to the browser dom
ReactDOM.render(elements, document.getElementById('root'));
