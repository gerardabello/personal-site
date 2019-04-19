import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Box = styled.div`
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.text};

  border-bottom: ${p => (p.selected ? `4px solid ${p.theme.color4}` : 'none')};

  height: 40px;
  font-size: 32px;
  @media (max-width: 500px) {
    height: 36px;
    font-size: 28px;
  }

  @media (max-width: 400px) {
    height: 30px;
    font-size: 22px;
  }

  a {
    color: ${p => p.theme.text};
    text-decoration: none;
  }
`

const AboutBox = styled(Box)`
  a {
    ${props =>
      props.theme.textBackgroundGif &&
      `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-size: 701%;
      background-position-x: 41%;
      background-position-y: 81%;

  `}
`

const ProjectsBox = styled(Box)`
  a {
    ${props =>
      props.theme.textBackgroundGif &&
      `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-size: 701%;
      background-position-x: 70%;
      background-position-y: 50%;
  `}
    `

const ContactBox = styled(Box)`
  a {
    ${props =>
      props.theme.textBackgroundGif &&
      `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

      background-size: 701%;
      background-position-x: 50%;
      background-position-y: 20%;
  `}
      `

export default class Menu extends Component {
  componentDidMount() {
    console.log('MENU')
  }

  render() {
    return (
      <Root>
        <AboutBox selected={window.location.pathname.match('about')}>
          <Link to="/about">About</Link>
        </AboutBox>

        <ProjectsBox selected={window.location.pathname.match('projects')}>
          <Link to="/projects">Projects</Link>
        </ProjectsBox>

        <ContactBox selected={window.location.pathname.match('contact')}>
          <Link to="/contact">Contact</Link>
        </ContactBox>
      </Root>
    )
  }
}
