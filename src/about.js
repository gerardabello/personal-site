import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from './layout'

const Root = styled.div``

const Paragraph = styled.p`
  font-family: 'IBM Plex Mono', sans-serif;
  margin-top: 0;
  text-indent: 2em;
  text-align: justify;

  font-size: 16px;
  letter-spacing: -0.03em;
  line-height: 1.5em;
  color: ${p => p.theme.text};
  font-weight: ${p => p.theme.bodyFontWeight};

  hyphens: auto;

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
`

export default class About extends Component {
  render () {
    return (
      <Root>
        <Layout title='About me'>
          <Paragraph>
            My name is Gerard Abelló Serras and I'm a developer based in
            Barcelona currently working at{' '}
            <a href='https://www.typeform.com'>Typeform</a>. I try to be a
            comprehensive programmer, as no one technology is good for solving
            all problems. I believe good, modern design and quality code are
            fundamental to create excellent software products. I like learning
            new technologies and methods as a way to challenge myself, but it
            also allows me to face problems I could not solve before.
          </Paragraph>
          <Paragraph>
            Programming is not only my job, it is also my passion. I'm currently
            really into <strong>Javascript</strong>, <strong>React</strong>,{' '}
            <strong>WebAudio</strong>, <strong>Functional programming</strong>{' '}
            and <strong>Web performance</strong>.
          </Paragraph>
          <Paragraph>I also like drawing, gaming, hiking and tea.</Paragraph>
        </Layout>
      </Root>
    )
  }
}
