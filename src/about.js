import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from './layout'

const Root = styled.div``

const Paragraph = styled.p`
  font-family: 'Monosten-E', sans-serif;
  margin-top: 0;
  text-indent: 2em;
  text-align: justify;

  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 1.5em;
  color: #eae3e0;

  hyphens: auto;

  a {
    color: ${props => props.theme.color4};
  }
  strong {
    color: ${props => props.theme.color4};
    font-weight: 600;
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
            Programming is not only my job, it is also my passion. I like, among
            other technologies, <strong>Javascript</strong>,{' '}
            <strong>React</strong>, <strong>WebAudio</strong>,{' '}
            <strong>Go</strong> and <strong>Deep Learning</strong>.
          </Paragraph>
          <Paragraph>I also like drawing, gaming, hiking and tea.</Paragraph>
        </Layout>
      </Root>
    )
  }
}
