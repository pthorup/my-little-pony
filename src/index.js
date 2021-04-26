import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PonyDataContextProvider } from './components/PonyDataContextProvider'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <PonyDataContextProvider>
                <App />
            </PonyDataContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
