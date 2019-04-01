import React, { Suspense, useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

import Home from './home'
import Sections from './sections'

import { getTheme } from './config'

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    background: ${props => props.theme.background};
  }
`

const Root = styled.div`
  font-family: 'Barlow', sans-serif;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 36px;
  padding-top: 24px;

  @media (max-width: 500px) {
    padding: 24px;
    padding-top: 18px;
  }

  @media (max-width: 400px) {
    padding: 18px;
    padding-top: 16px;
  }
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
        <Router>
          <Suspense fallback={<div />}>
            <Background />
            <Content>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home {...props} onChangeTheme={handleThemeChange} />
                  )}
                />
                <Route component={Sections} />
              </Switch>
            </Content>
          </Suspense>
        </Router>
      </Root>
    </ThemeProvider>
  )
}

export default App
