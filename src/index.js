import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

export function mount (node) {
  ReactDOM.render(<App />, node)
}

mount(document.getElementById('root'))
