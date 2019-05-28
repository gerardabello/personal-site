import React from 'react'
import styled, { keyframes } from 'styled-components'
import { generateKeyframes } from 'spring-animation-keyframes'

import Container from './container'
import Menu from './menu'
import RefreshIcon from './refresh-icon'

const appearBottom = keyframes`${generateKeyframes(
  [
    {
      tension: 280,
      friction: 60,
      from: 30,
      to: 0,
      unit: 'px',
      property: 'translateY'
    },
    {
      tension: 280,
      friction: 100,
      from: 0,
      to: 1,
      unit: '',
      property: 'opacity'
    }
  ],
  { time: 2 }
)}`

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

  position: relative;
  animation: ${appearBottom} 2s linear 2s backwards;
`

const Title = styled.h1`
  font-family: 'Integral CF', sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
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
  position: relative;
  animation: ${appearBottom} 2s linear 0.4s backwards;

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
  position: relative;
  animation: ${appearBottom} 2s linear 1.2s backwards;

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
