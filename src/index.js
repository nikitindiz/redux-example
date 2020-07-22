import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const counterReducer = (
  state = { counter: 0 },
  action,
) => {
  const { type } = action;

  if (type === 'INCREASE') {
    return {
      counter: state.counter + 1
    };
  }

  if (type === 'DECREASE') {
    return {
      counter: state.counter - 1
    };
  }

  return state;
};

const rootReducer = combineReducers({
  counterReducer,
  // here can be more reducers
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);