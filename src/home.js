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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChangeThemeButton = styled.div`
  height: 48px;
  width: 48px;
  position: fixed;
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
  align-items: flex-start;
  width: 100%;
  margin-top: 7vh;
`;

const Title = styled.h1`
  color: ${(p) => p.theme.titleText};
  font-weight: ${(p) => p.theme.titleFontWeight};
  letter-spacing: 2px;
  text-align: left;
  margin: 0;

  display: inline;

  font-size: 70px;
  line-height: 1.5;
  @media (max-width: 700px) {
    font-size: 62px;
  }
  @media (max-width: 500px) {
    font-size: 46px;
  }
  @media (max-width: 370px) {
    font-size: 38px;
  }

  ${(props) =>
    props.theme.headingTextShadow &&
    `
    text-shadow: ${props.theme.headingTextShadow};
    `}

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
      background-size: 122%;
  `}
`;

const Paragraph = styled.p`
  font-weight: ${(p) => p.theme.bodyFontWeight};
  margin-top: 0;
  text-align: left;

  color: ${(p) => p.theme.text};

  hyphens: auto;

  font-size: 36px;
  line-height: 1.25;

  @media (max-width: 425px) {
    font-size: 28px;
  }

  a {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }

  strong,
  a {
    color: ${(props) => props.theme.color4};
  }

  ${(props) =>
    props.theme.bodyTextShadow &&
    `
    text-shadow: ${props.theme.bodyTextShadow};
    `}
`;

const About = styled.div`
  animation: ${appearBottom} 3s linear 1s backwards;
  margin-top: 3em;
`;

const NomImg = styled.img`
  display: inline-block;

  width: 3.5em;
  margin-bottom: -0.6em;
  margin-left: 0.1em;

  filter: ${({ theme }) => theme.nomFilter};
`;

const Home = ({ onChangeTheme }) => (
  <Root>
    <ChangeThemeButton onClick={onChangeTheme}>
      <RefreshIcon />
    </ChangeThemeButton>
    <TitleWrapper>
      <Title>
        Hi, I&apos;m <NomImg alt="Gerard" src="/assets/imgs/nom.png" />
      </Title>
    </TitleWrapper>

    <About>
      <Paragraph>
        I&apos;m a software engineer living in Barcelona and currently working
        at <a href="https://remote.com/">Remote</a>.
      </Paragraph>
      <Paragraph>
        My greatest joy in{" "}
        <a href="https://github.com/gerardabello">programming</a> is creating{" "}
        <a href="https://mig.serras.dev/?path=/story/welcome--intro">
          interfaces
        </a>{" "}
        that empower users to{" "}
        <a href="https://equation-solver.serras.dev/">solve</a> their real-world
        problems.
      </Paragraph>
      <Paragraph>
        I also like tea, taking care of my plants and playing the{" "}
        <a href="https://colossal.serras.dev">piano</a>.
      </Paragraph>
      <Paragraph>
        To get in touch, please send me a message on{" "}
        <a href="https://linkedin.com/in/gerard-abell%C3%B3-serras-23143153">
          Linkedin
        </a>
        .
      </Paragraph>
    </About>
  </Root>
);

export default Home;
