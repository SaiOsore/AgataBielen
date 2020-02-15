import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import allReducer from './reducers';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const store = createStore(
//   allReducer,
//   (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => {
//   localStorage['redux-store'] = JSON.stringify(store.getState());
// });

ReactDOM.render(
   <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
