import React from 'react'
import styled from 'styled-components'

import SectionWrapper from './section-wrapper'

const Root = styled.div``

const Paragraph = styled.p`
  font-family: 'Input Sans Compressed', monospace;
  margin-top: 0;
  text-indent: 2em;
  text-align: justify;

  color: ${p => p.theme.text};
  font-weight: ${p => p.theme.bodyFontWeight};

  hyphens: auto;

  font-size: 18px;
  line-height: 28px;

  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 26px;
  }

  a {
    color: ${props => props.theme.color4};
    font-style: italic;
    text-decoration: underline;
  }

  strong {
    color: ${props => props.theme.color4};
    font-style: italic;
    font-weight: normal;
  }

  position: relative;

  &:first-child:before {
    content: '';
    background: ${p => p.theme.text};
    height: 10px;
    width: 18px;
    position: absolute;
    left: 0;
    top: 0.5em;
  }
`

export default () => (
  <SectionWrapper>
    <Root>
      <Paragraph>
        My name is Gerard Abelló Serras and I&apos;m a software engineer living
        in Barcelona and currently working at{' '}
        <a href="https://www.typeform.com">Typeform</a>. I try to be a
        comprehensive programmer, as no one technology is good for solving all
        problems. I believe good, modern design and quality code are fundamental
        to create excellent software products. I like learning new technologies
        and methods as a way to challenge myself, but it also allows me to face
        problems I could not solve before.
      </Paragraph>
      <Paragraph>
        Programming is not only my job, it is also my passion. I&apos;m
        currently really into <strong>React</strong>,{' '}
        <strong>WebAudio</strong>, <strong>Functional programming</strong> and{' '}
        <strong>Rust</strong>.
      </Paragraph>
      <Paragraph>I also like drawing, gaming, hiking and tea.</Paragraph>
    </Root>
  </SectionWrapper>
)
