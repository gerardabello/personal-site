import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

import Container from "./container";
import Home from "./home";
import Projects from "./projects";
import About from "./about";
import { getTheme, getRandomThemeId } from "./config";

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    background: ${(props) => props.theme.background};
  }
`;

const Root = styled.div`
  position: relative;
  font-family: "Barlow", sans-serif;
  width: 100%;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
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
          <Home onChangeTheme={handleThemeChange} />
          <Container>
            <About />
            <Projects />
          </Container>
        </Content>
      </Root>
    </ThemeProvider>
  );
};

export default App;
