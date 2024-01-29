import React from "react";
import styled, { keyframes } from "styled-components";
import { generateKeyframes } from "spring-animation-keyframes";

import Container from "./container";
import RefreshIcon from "./refresh-icon";

const appearBottom = keyframes`${generateKeyframes(
  [
    {
      tension: 280,
      friction: 60,
      from: 30,
      to: 0,
      unit: "px",
      property: "translateY",
    },
    {
      tension: 280,
      friction: 100,
      from: 0,
      to: 1,
      unit: "",
      property: "opacity",
    },
  ],
  { time: 2 }
)}`;

const Root = styled.div`
  position: relative;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChangeThemeButton = styled.div`
  height: 48px;
  width: 48px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.text};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-variation-settings: "WONK" 100, "SOFT" 100;
  font-weight: ${(p) => p.theme.titleFontWeight};
  letter-spacing: 2px;
  text-align: center;
  margin: 0;

  display: inline;

  font-size: 90px;
  @media (max-width: 700px) {
    font-size: 72px;
  }
  @media (max-width: 500px) {
    font-size: 52px;
  }
  @media (max-width: 350px) {
    font-size: 42px;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${(props) =>
    props.theme.headingTextShadow &&
    `
    text-shadow: ${props.theme.headingTextShadow};
    `}
`;

const HiTitle = styled(Title)`
  position: relative;
  animation: ${appearBottom} 2s linear 0.4s backwards;

  ${(props) =>
    props.theme.textBackgroundGif &&
    `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-position-x: 60%;
      background-position-y: 34%;
      background-size: 502%;
  `}
`;

const SubTitle = styled(Title)`
  position: relative;
  animation: ${appearBottom} 2s linear 1.2s backwards;

  ${(props) =>
    props.theme.textBackgroundGif &&
    `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-size: 120%;
      background-position-x: 50%;
      background-position-y: 55%;
  `}
`;

const Home = ({ onChangeTheme }) => (
  <Root>
    <Container>
      <TitleWrapper>
        <HiTitle>Hi!</HiTitle>
        <SubTitle>I&apos;m Gerard</SubTitle>
      </TitleWrapper>
    </Container>
    <ChangeThemeButton onClick={onChangeTheme}>
      <RefreshIcon />
    </ChangeThemeButton>
  </Root>
);

export default Home;
