import React, { Component } from 'react'
import styled from 'styled-components'

import Square from './square.jsx'

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: Montserrat,sans-serif;
  font-weight: 600;
  overflow: hidden;

  font-size: ${props => props.fontSize || '100%'};

  color: white;
  mix-blend-mode: exclusion;
`

class TextSquare extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <Root fontSize={this.props.fontSize}>
        {this.props.children}
      </Root>
    )
  }
}

export default Square(TextSquare)
