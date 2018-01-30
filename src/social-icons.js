import React, { Component } from 'react'
import styled from 'styled-components'

import sketchfabIcon from '../assets/logos/sketchfab.png'
import githubIcon from '../assets/logos/github.png'

const Root = styled.div`
  margin-top: 32px;
`

const IconWrapper = styled.a`
  width: 38px;
  height: 38px;
  margin-right: 20px;
  opacity: 0.5;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 1;
  }
`

const Img = styled.img`
  width: 38px;
  height: 38px;
`

class SocialIcon extends Component {
  render () {
    const { src, href } = this.props
    return (
      <IconWrapper href={href}>
        <Img src={src} />
      </IconWrapper>
    )
  }
}

export default class SocialIcons extends Component {
  render () {
    return (
      <Root>
        <SocialIcon src={githubIcon} href='https://github.com/gerardabello' />
        <SocialIcon src={sketchfabIcon} href='https://sketchfab.com/gerardabello' />
      </Root>
    )
  }
}
