import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/application.scss"
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import flatsReducer from "./reducers/flats_reducer"

const reducers = combineReducers({
  flats: flatsReducer
})

const store = createStore(reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  // </Provider>
);
