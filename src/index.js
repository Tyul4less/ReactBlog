import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
        <Root />,
  document.getElementById('root')
);

reportWebVitals();
