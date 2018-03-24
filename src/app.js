import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import About from './about'
import Projects from './projects'
import Background from './background'

const theme = {
  background: '#11151C',
  text: '#EAE3E0',
  color1: '#212D40',
  color2: '#364156',
  color3: '#7D4E57',
  color4: '#D66853'
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

const Root = styled.div`
  font-family: 'Rubik', sans-serif;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 48px;

  @media (max-width: 450px) {
    padding: 36px;
  }
`

const Content = styled.div`
  min-height: 100%;
  position: relative;
`

export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Root>
            <Background />
            <Content>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
            </Content>
          </Root>
        </Router>
      </ThemeProvider>
    )
  }
}
