import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/custom.scss'

import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

