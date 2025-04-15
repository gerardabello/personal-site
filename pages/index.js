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
            font-family: 'Roobert';
          }
        `}
      </style>

      <style>
        {`
            @font-face {
              font-family: 'Roobert';
              font-weight: 100 900;
              src: url('/fonts/RoobertGX.woff2') format('woff2');
            }

            @font-face {
              font-family: 'Roobert';
              font-weight: 100 900;
              font-style: italic;
              src: url('/fonts/RoobertItalicGX.woff2') format('woff2');
            }
          `}
      </style>
    </Head>
    <GlobalStyle />
    <App />
  </Root>
);

export default Index;
