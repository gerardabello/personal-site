import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import Container from './container'
import Menu from './menu'

const appearBottom = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }

  0%{
    opacity: 0;
    transform: translateY(30px);
  }
`

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleWrapper = styled.div`
  margin-top: 25vh;
`

const MenuWrapper = styled.div`
  margin-top: 20vh;
  padding: 0 8px;

  opacity: 0;
  animation: ${appearBottom} 1s ease 1.8s forwards;
`

const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  opacity: 0;
  margin: 0;

  font-size: 72px;
  @media (max-width: 500px) {
    font-size: 58px;
  }
  @media (max-width: 350px) {
    font-size: 42px;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const HiTitle = styled(Title)`
  animation: ${appearBottom} 1s ease 0.2s forwards;
`
const SubTitle = styled(Title)`
  animation: ${appearBottom} 1s ease 1s forwards;
`

export default class Home extends Component {
  render () {
    return (
      <Root>
        <Container>
          <TitleWrapper>
            <HiTitle>Hi!</HiTitle>
            <SubTitle>I'm Gerard</SubTitle>
          </TitleWrapper>
          <MenuWrapper>
            <Menu />
          </MenuWrapper>
        </Container>
      </Root>
    )
  }
}
