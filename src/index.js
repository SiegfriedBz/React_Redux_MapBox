import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/application.scss"
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import flatsReducer from "./reducers/flats_reducer"
import SelectFlatReducer from "./reducers/selectFlat_reducer"


const middleWares = applyMiddleware(logger)

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: SelectFlatReducer
})

const store = createStore(reducers, {}, middleWares)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
