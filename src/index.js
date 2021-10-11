import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FormContextProvider from './form-state/form.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

