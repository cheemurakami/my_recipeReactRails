import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/custom.scss'
import { Provider } from "react-redux";
import { store } from "./rdx/stores";

import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

