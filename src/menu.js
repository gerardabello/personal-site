import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Box = styled.div`
  font-size: 24px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.text};

  border-bottom: ${p => (p.selected ? '4px solid #d66752' : 'none')};

  @media (max-width: 450px) {
    font-size: 20px;
  }

  a {
    color: ${p => p.theme.text};
    text-decoration: none;
  }
`

const AboutBox = styled(Box)``

const ProjectsBox = styled(Box)``

const ContactBox = styled(Box)``

export default class Menu extends Component {
  render () {
    return (
      <Root>
        <AboutBox selected={window.location.pathname.match('about')}>
          <Link to='/about'>About</Link>
        </AboutBox>

        <ProjectsBox selected={window.location.pathname.match('projects')}>
          <Link to='/projects'>Projects</Link>
        </ProjectsBox>

        <ContactBox selected={window.location.pathname.match('contact')}>
          <Link to='/contact'>Contact</Link>
        </ContactBox>
      </Root>
    )
  }
}
