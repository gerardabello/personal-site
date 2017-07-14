import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.jsx'

export function mount ({rootNode}) {
  ReactDOM.render(<App />, rootNode)
}

mount({
  rootNode: document.getElementById('root')
})
