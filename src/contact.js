import React from 'react'
import styled from 'styled-components'

import SectionWrapper from './section-wrapper'

import GithubIcon from 'react-feather/dist/icons/github'
import MailIcon from 'react-feather/dist/icons/mail'

const Root = styled.div`
  margin-top: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const IconWrapper = styled.div`
  background: ${p => p.theme.text};
  color: ${p => p.theme.background};
  padding: 8px;
  width: 44px;
  height: 44px;

  margin-right: 16px;

  & > * {
    width: 28px;
    height: 28px;
  }
`

const Content = styled.div`
  width: fit-content;
`

const Button = styled.div`
  display: flex;
  align-items: center;

  border: none;
  margin: 16px;
  background: transparent;
  outline: none;
  cursor: pointer;

  font-family: 'Space Mono', sans-serif;
  color: ${p => p.theme.text};
  font-size: 24px;
  font-weight: ${p => p.theme.bodyFontWeight};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const openPopup = () => {
  import(/* webpackChunkName: "embed" */ '@typeform/embed')
    .then(({ makePopup }) => {
      makePopup('https://gerardabello.typeform.com/to/ITG3fr', {
        mode: 'popup',
        autoOpen: true,
        autoClose: 2000
      })
    })
    .catch(() => alert('Could not show contact form'))
}

const About = () => (
  <SectionWrapper>
    <Root>
      <Content>
        <Button onClick={openPopup}>
          <IconWrapper>
            <MailIcon />
          </IconWrapper>
          Leave a message
        </Button>

        <a href="https://github.com/gerardabello">
          <Button>
            <IconWrapper>
              <GithubIcon />
            </IconWrapper>
            Github
          </Button>
        </a>
      </Content>
    </Root>
  </SectionWrapper>
)

export default About
