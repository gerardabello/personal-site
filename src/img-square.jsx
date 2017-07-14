import React, { Component } from 'react'
import styled from 'styled-components'

import Square from './square.jsx'

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  mix-blend-mode: darken;

  img {
    width: 100%;
  }
`

class ImgSquare extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <Root>
        <img src={this.props.src} />
      </Root>
    )
  }
}

export default Square(ImgSquare)
