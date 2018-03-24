import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Box = styled.div`
  font-size: 18px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.text};

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
        <AboutBox>
          <Link to='/about'>About</Link>
        </AboutBox>

        <ProjectsBox>
          <Link to='/projects'>Projects</Link>
        </ProjectsBox>

        <ContactBox>
          <Link to='/contact'>Contact</Link>
        </ContactBox>
      </Root>
    )
  }
}
