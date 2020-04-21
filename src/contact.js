import React from 'react'
import styled from 'styled-components'

import SectionWrapper from './section-wrapper'

import GithubIcon from 'react-feather/dist/icons/github'
import MailIcon from 'react-feather/dist/icons/mail'

const Root = styled.div`
  display: flex;
  align-items: flex-start;
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

const Button = styled.div`
  display: flex;
  align-items: center;

  border: none;
  margin: 8px 0;
  background: transparent;
  outline: none;
  cursor: pointer;

  font-family: 'Input Sans Compressed', sans-serif;
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
  <SectionWrapper title='Contact'>
    <Root>
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
    </Root>
  </SectionWrapper>
)

export default About
