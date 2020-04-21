import React, { Suspense, useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import MetaTags from 'react-meta-tags'

import Container from './container'
import Home from './home'
import Projects from './projects'
import Contact from './contact'
import About from './about'

import { getTheme } from './config'

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    background: ${props => props.theme.background};
  }
`

const Root = styled.div`
  position: relative;
  font-family: 'Barlow', sans-serif;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`

const Content = styled.div`
  min-height: 100%;
  position: relative;
`

const App = () => {
  const [theme, setTheme] = useState(getTheme())

  const Background = theme.backgroundComponent

  const handleThemeChange = () => setTheme(getTheme)

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <MetaTags>
          <meta name="theme-color" content={theme.background} />
        </MetaTags>
        <Suspense fallback={<div />}>
          <Background />
          <Content>
            <Home onChangeTheme={handleThemeChange} />
            <Container>
            <About />
            <Projects />
            <Contact />
            </Container>
          </Content>
        </Suspense>
      </Root>
    </ThemeProvider>
  )
}

export default App
