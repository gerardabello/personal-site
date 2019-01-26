import React, { Component, Suspense } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from './contact'

import IntegralCFBoldWoff from '../assets/fonts/subset-IntegralCF-Bold.woff'
import IntegralCFBoldWoff2 from '../assets/fonts/subset-IntegralCF-Bold.woff2'

import IntegralCFRegularWoff from '../assets/fonts/subset-IntegralCF-Regular.woff'
import IntegralCFRegularWoff2 from '../assets/fonts/subset-IntegralCF-Regular.woff2'

import BarlowCondensedExtraBoldWoff from '../assets/fonts/subset-BarlowCondensed-ExtraBold.woff'
import BarlowCondensedExtraBoldWoff2 from '../assets/fonts/subset-BarlowCondensed-ExtraBold.woff2'

import BarlowCondensedLightWoff from '../assets/fonts/subset-BarlowCondensed-Light.woff'
import BarlowCondensedLightWoff2 from '../assets/fonts/subset-BarlowCondensed-Light.woff2'

import SpaceMonoWoff from '../assets/fonts/subset-SpaceMono-Regular.woff'
import SpaceMonoWoff2 from '../assets/fonts/subset-SpaceMono-Regular.woff2'

import SpaceMonoItalicWoff from '../assets/fonts/subset-SpaceMono-Italic.woff'
import SpaceMonoItalicWoff2 from '../assets/fonts/subset-SpaceMono-Italic.woff2'

import { getTheme } from './config'

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    background: ${props => props.theme.background};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

`
const GlobalFontsStyle = createGlobalStyle`
  @font-face {
      font-family: 'Integral CF';
      src: url(${IntegralCFBoldWoff2}) format('woff2'),
          url(${IntegralCFBoldWoff}) format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Integral CF';
      src: url(${IntegralCFRegularWoff2}) format('woff2'),
          url(${IntegralCFRegularWoff}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Barlow';
      src: url(${BarlowCondensedExtraBoldWoff2}) format('woff2'),
          url(${BarlowCondensedExtraBoldWoff}) format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Barlow';
      src: url(${BarlowCondensedLightWoff2}) format('woff2'),
          url(${BarlowCondensedLightWoff}) format('woff');
      font-weight: lighter;
      font-style: normal;
  }

  @font-face {
      font-family: 'Space Mono';
      src: url(${SpaceMonoWoff2}) format('woff2'),
          url(${SpaceMonoWoff}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Space Mono';
      src: url(${SpaceMonoItalicWoff2}) format('woff2'),
          url(${SpaceMonoItalicWoff}) format('woff');
      font-weight: normal;
      font-style: italic;
  }

`

const Root = styled.div`
  font-family: 'Integral CF', sans-serif;
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
  constructor (props) {
    super(props)

    this.state = { theme: getTheme() }

    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme () {
    this.setState({ theme: getTheme(this.state.theme.id) })
  }

  render () {
    const Background = this.state.theme.backgroundComponent

    return (
      <ThemeProvider theme={this.state.theme}>
        <Router>
          <Root>
            <GlobalStyle />
            <GlobalFontsStyle />
            <MetaTags>
              <meta name='theme-color' content={this.state.theme.background} />
            </MetaTags>
            <Suspense fallback={<div />}>
              <Background />
              <Content>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Home {...props} onChangeTheme={this.changeTheme} />
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
              </Content>
            </Suspense>
          </Root>
        </Router>
      </ThemeProvider>
    )
  }
}
