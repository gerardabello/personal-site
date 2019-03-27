import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import Container from './container'
import Menu from './menu'

const Root = styled.div``

const appearBottom = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }

  0%{
    opacity: 0;
    transform: translateY(15px);
  }
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  font-size: 48px;

  @media (max-width: 450px) {
    font-size: 36px;
  }
`

const Content = styled.div`
  padding-top: 12vh;
  animation: ${appearBottom} 0.8s ease;
`

const MenuWrapper = styled.div``

export default class About extends Component {
  render () {
    const { children } = this.props
    return (
      <Root>
        <Container>
          <MenuWrapper>
            <Menu />
          </MenuWrapper>
          <Content>{children}</Content>
        </Container>
      </Root>
    )
  }
}
