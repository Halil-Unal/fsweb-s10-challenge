import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import {legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware} from "redux";
const depo = createStore(myReducer,applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={depo}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);