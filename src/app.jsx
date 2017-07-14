import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import TextSquare from './text-square.jsx'
import ImgSquare from './img-square.jsx'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900');
`

const Root = styled.div`
  display: grid;

  grid-template-columns: 25vw 25vw 25vw 25vw;
  grid-template-rows: 25vw 25vw 25vw 25vw 25vw;

  font-size: 5vw;

  @media (max-width: 600px) {
    font-size: 10vw;

    grid-template-columns: 50vw 50vw;
    grid-template-rows: 50vw 50vw 50vw 50vw 50vw 50vw 50vw 50vw 50vw 50vw;
  }
`

export default class App extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <Root>
        <TextSquare fontSize='155%'> Gerard </TextSquare>
        <TextSquare fontSize='175%'> Abelló </TextSquare>
        <TextSquare fontSize='145%'> Serras </TextSquare>
        <ImgSquare src='assets/imgs/profile_d.png' />
        <TextSquare />
        <TextSquare fontSize='101%'> Frontend Developer </TextSquare>
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
        <TextSquare />
      </Root>
    )
  }
}
