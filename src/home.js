import React from 'react'
import styled, { keyframes } from 'styled-components'

import Container from './container'
import Menu from './menu'
import RefreshIcon from './refresh-icon'

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

const ChangeThemeButton = styled.div`
  height: 48px;
  width: 48px;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.text};
`

const TitleWrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MenuWrapper = styled.div`
  margin-top: 20vh;
  padding: 0 8px;

  opacity: 0;
  animation: ${appearBottom} 1s ease 1.8s forwards;
`

const Title = styled.h1`
  font-family: 'Integral CF', sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  opacity: 0;
  margin: 0;

  display: inline;

  font-size: 60px;
  @media (max-width: 500px) {
    font-size: 46px;
  }
  @media (max-width: 350px) {
    font-size: 36px;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const HiTitle = styled(Title)`
  animation: ${appearBottom} 1s ease 0.2s forwards;

  ${props =>
    props.theme.textBackgroundGif &&
    `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-position-x: 60%;
      background-position-y: 34%;
      background-size: 502%;
  `}
`

const SubTitle = styled(Title)`
  animation: ${appearBottom} 1s ease 1s forwards;

  ${props =>
    props.theme.textBackgroundGif &&
    `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-size: 138%;
      background-position-x: 50%;
      background-position-y: 55%;
  `}
`

const Home = ({ onChangeTheme }) => (
  <Root>
    <Container>
      <TitleWrapper>
        <HiTitle>Hi!</HiTitle>
        <SubTitle>I&apos;m Gerard</SubTitle>
      </TitleWrapper>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </Container>
    <ChangeThemeButton onClick={onChangeTheme}>
      <RefreshIcon />
    </ChangeThemeButton>
  </Root>
)

export default Home
