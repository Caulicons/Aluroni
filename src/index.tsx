import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Router from './routes';

ReactDOM.render(
  /* Quais componentes do React (JSX) ele vai interpreta para o html (para um DOM real) */
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  /* A onde ele vai injetar o resultado. */
  document.getElementById('root')
);
