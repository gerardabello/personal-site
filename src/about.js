import React from "react";
import styled from "styled-components";

import SectionWrapper from "./section-wrapper";

const Root = styled.div``;

const Paragraph = styled.p`
  font-variation-settings: "WONK" 0, "SOFT" 0;
  font-weight: ${(p) => p.theme.bodyFontWeight};
  margin-top: 0;
  text-align: justify;

  color: ${(p) => p.theme.text};

  hyphens: auto;

  font-size: 18px;
  line-height: 28px;

  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 26px;
  }

  a {
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
  }

  strong,
  a {
    color: ${(props) => props.theme.color4};
    font-style: italic;
    font-variation-settings: "WONK" 100, "SOFT" 100;
    font-weight: ${(p) => p.theme.bodyFontWeight * 1.3};
  }

  position: relative;

  &:first-child {
    text-indent: 2em;
  }

  &:first-child:before {
    content: "";
    background: ${(p) => p.theme.text};
    height: 10px;
    width: 18px;
    position: absolute;
    left: 0;
    top: 0.5em;
  }

  ${(props) =>
    props.theme.bodyTextShadow &&
    `
    text-shadow: ${props.theme.bodyTextShadow};
    `}
`;

export default () => (
  <SectionWrapper>
    <Root>
      <Paragraph>
        My name is Gerard Abelló Serras and I&apos;m a software engineer living
        in Barcelona and currently working at{" "}
        <a href="https://remote.com/">Remote</a>. I try to be a comprehensive
        programmer, as no one technology is good for solving all problems. I
        believe good, modern design and quality code are fundamental to create
        excellent software products. I like learning new technologies and
        methods as a way to challenge myself, but it also allows me to face
        problems I could not solve before.
      </Paragraph>
      <Paragraph>
        Programming is not only my job, it is also my passion. I&apos;m
        currently really into <strong>React</strong>, <strong>WebAudio</strong>,{" "}
        <strong>Functional programming</strong> and <strong>Rust</strong>.
      </Paragraph>
      <Paragraph>I also like drawing, gaming, hiking and tea.</Paragraph>
    </Root>
  </SectionWrapper>
);
