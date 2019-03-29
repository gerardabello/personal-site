import React, { Component, Suspense } from 'react'
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

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { theme: getTheme() }

    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme() {
    this.setState({ theme: getTheme(this.state.theme.id) })
  }

  render() {
    const Background = this.state.theme.backgroundComponent

    return (
      <ThemeProvider theme={this.state.theme}>
        <Root>
          <GlobalStyle />
          <MetaTags>
            <meta name="theme-color" content={this.state.theme.background} />
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
                      <Home {...props} onChangeTheme={this.changeTheme} />
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
}
