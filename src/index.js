import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import App from './app'

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

import { createStaticGlobalStyles } from './utils'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

// This hack is to solve https://github.com/styled-components/styled-components/issues/1593
createStaticGlobalStyles(`
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
`)

const Root = styled.div``

export function mount (node) {
  ReactDOM.render(
    <Root>
      <GlobalStyle />
      <App />
    </Root>,
    node
  )
}

mount(document.getElementById('root'))
