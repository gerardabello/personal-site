import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import App from './app'
import { createStaticGlobalStyles } from './utils'

import WhyteInktrapWoff from '../assets/fonts/subset-WhyteInktrap-Super.woff'
import WhyteInktrapWoff2 from '../assets/fonts/subset-WhyteInktrap-Super.woff2'
import InputSansCondensedItalicWoff from '../assets/fonts/subset-InputSansCondensed-Italic.woff'
import InputSansCondensedItalicWoff2 from '../assets/fonts/subset-InputSansCondensed-Italic.woff2'
import InputSansCondensedWoff from '../assets/fonts/subset-InputSansCondensed-Regular.woff'
import InputSansCondensedWoff2 from '../assets/fonts/subset-InputSansCondensed-Regular.woff2'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }
`

// This hack is to solve https://github.com/styled-components/styled-components/issues/1593
createStaticGlobalStyles(`
  @font-face {
    font-family: 'Whyte Inktrap';
    src: url(${WhyteInktrapWoff2}) format('woff2'),
    url(${WhyteInktrapWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Input Sans Condensed';
    src: url(${InputSansCondensedWoff2}) format('woff2'),
    url(${InputSansCondensedWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Input Sans Condensed';
    src: url(${InputSansCondensedItalicWoff2}) format('woff2'),
    url(${InputSansCondensedItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
  }
`)

const Root = styled.div``

function mount(node) {
  ReactDOM.render(
    <Root>
      <GlobalStyle />
      <App />
    </Root>,
    node
  )
}

mount(document.getElementById('root'))
