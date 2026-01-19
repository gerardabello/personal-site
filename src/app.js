import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

import Home from "./home";
import { getTheme, getRandomThemeId } from "./config";

const Container = styled.div`
  max-width: 100%;
  width: 744px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 700px) {
    padding: 0 24px;
  }
  @media (max-width: 500px) {
    padding: 0 16px;
  }
  @media (max-width: 350px) {
    padding: 0 14px;
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    background: ${(props) => props.theme.background};
  }
`;

const Root = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

const Content = styled.div`
  min-height: 100%;
  position: relative;
`;

const App = () => {
  const [themeId, setThemeId] = useState("light");

  const theme = getTheme(themeId);
  const Background = theme.backgroundComponent;

  const handleThemeChange = () => setThemeId(getRandomThemeId(themeId));

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <Head>
          <meta name="theme-color" content={theme.background} />
        </Head>
        <Background />
        <Content>
          <Container>
            <Home onChangeTheme={handleThemeChange} />
          </Container>
        </Content>
      </Root>
    </ThemeProvider>
  );
};

export default App;
