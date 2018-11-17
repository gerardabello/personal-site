import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from './contact'

import SofiaProBoldWoff from '../assets/fonts/subset-SofiaPro-Bold.woff'
import SofiaProBoldWoff2 from '../assets/fonts/subset-SofiaPro-Bold.woff2'

import IBMPlexMonoWoff from '../assets/fonts/subset-IBMPlexMono.woff'
import IBMPlexMonoWoff2 from '../assets/fonts/subset-IBMPlexMono.woff2'

import IBMPlexMonoItalicWoff from '../assets/fonts/subset-IBMPlexMono-Italic.woff'
import IBMPlexMonoItalicWoff2 from '../assets/fonts/subset-IBMPlexMono-Italic.woff2'

import { theme } from './config'

injectGlobal`
  html, body, #root{
    background: ${theme.background};
  }

  @font-face {
      font-family: 'Sofia Pro';
      src: url(${SofiaProBoldWoff2}) format('woff2'),
          url(${SofiaProBoldWoff}) format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'IBM Plex Mono';
      src: url(${IBMPlexMonoWoff2}) format('woff2'),
          url(${IBMPlexMonoWoff}) format('woff');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'IBM Plex Mono';
      src: url(${IBMPlexMonoItalicWoff2}) format('woff2'),
          url(${IBMPlexMonoItalicWoff}) format('woff');
      font-weight: 400;
      font-style: italic;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

const Root = styled.div`
  font-family: 'Sofia Pro', sans-serif;
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
  render () {
    const Background = theme.backgroundComponent

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Root>
            <MetaTags>
              <meta name='theme-color' content={theme.background} />
            </MetaTags>
            <Background />
            <Content>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
            </Content>
          </Root>
        </Router>
      </ThemeProvider>
    )
  }
}
