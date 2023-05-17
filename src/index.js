import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.css';
import App from './App';
import Header from "./component/header";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={style.container}>
     <App/>
  </div>
);

