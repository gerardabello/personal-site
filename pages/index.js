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
      <meta charSet="utf-8" />
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
            font-family: 'Fraunces';
          }
        `}
      </style>

      <style>
        {`
            @font-face {
              font-family: 'Fraunces';
              font-weight: 100 900;
              src: url('/fonts/Fraunces--latin_basic.woff2') format('woff2');
              unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
            }

            @font-face {
              font-family: 'Fraunces';
              font-weight: 100 900;
              font-style: italic;
              src: url('/fonts/Fraunces-Italic--latin_basic.woff2') format('woff2');
              unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
            }
          `}
      </style>
    </Head>
    <GlobalStyle />
    <App />
  </Root>
);

export default Index;
