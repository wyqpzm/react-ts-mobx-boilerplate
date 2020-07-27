import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { stores } from './stores'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.scss'

ReactDOM.render(
    <Provider {...stores}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root'),
)
