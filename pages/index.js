import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

import App from "../src/app";

if (typeof window !== "undefined") {
  history.scrollRestoration = "manual";
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }
`;

const Root = styled.div``;

const Index = () => (
  <Root>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="Description"
        content="Gerard Abelló Serras personal website"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Gerard Abelló Serras</title>

      <style>
        {`
          html, body, #root{
            margin: 0;
          }
        `}
      </style>

      <style>
        {`
 @font-face {
    font-family: 'Barlow Semi Condensed';
    src: url('/fonts/subset-BarlowSemiCondensed-Black.woff2') format('woff2'),
    url('../public/fonts/subset-BarlowSemiCondensed-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Input Sans Condensed';
    src: url('/fonts/subset-InputSansCondensed-Regular.woff2') format('woff2'),
    url('/fonts/subset-InputSansCondensed-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Input Sans Condensed';
    src: url('/fonts/subset-InputSansCondensed-Italic.woff2') format('woff2'),
    url('/fonts/subset-InputSansCondensed-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
        `}
      </style>
    </Head>
    <GlobalStyle />
    <App />
  </Root>
);

export default Index;
