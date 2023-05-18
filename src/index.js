import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.module.css';
import MainComponent from './component/mainComponent';
import ScrollTop from './features/scrollTop'
import rootReducer from './features/combineReducers';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer:rootReducer
});
root.render(
  <Provider store={store}>
  <BrowserRouter>
      <ScrollTop/>
      <MainComponent />   
  </BrowserRouter>
  </Provider>
);

