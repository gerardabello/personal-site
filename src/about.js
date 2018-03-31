import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from './layout'

const Root = styled.div``

const Paragraph = styled.p`
  margin-top: 0;
  text-indent: 2em;
  text-align: justify;

  font-weight: 400;
  font-size: 15px;
  color: #eae3e0;
  letter-spacing: 0.31px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    color: ${props => props.theme.color4};
  }
  strong {
    color: ${props => props.theme.color3};
    font-weight: 700;
  }
`

export default class About extends Component {
  render () {
    return (
      <Root>
        <Layout title='About me'>
          <Paragraph>
            Hello! I'm Gerard, a developer based in Barcelona currently working
            at <a href='https://www.typeform.com'>Typeform</a>. I try to be a
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