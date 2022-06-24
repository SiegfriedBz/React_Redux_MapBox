import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/application.scss"
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise';
import flatsReducer from "./reducers/flats_reducer"
import SelectFlatReducer from "./reducers/selectFlat_reducer"

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: SelectFlatReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = applyMiddleware(promiseMiddleware)

const store = createStore(reducers, {}, composeEnhancers(middleWares))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
