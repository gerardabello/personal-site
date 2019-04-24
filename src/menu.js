import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getRelativeBoundingClientRect } from './utils'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`

const BoxUnderline = styled.div`
  position: absolute;
  height: 4px;
  background: ${p => p.theme.color4};
  width: ${p => p.width}px;
  top: ${p => p.top + p.height - 4}px;
  left: ${p => p.left}px;

  transition: all 0.3s ease-out;
`

const Box = styled.div`
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.text};

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

    &:active {
      color: ${p => p.theme.color4};
    }
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
  }
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
  }
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
  }
`

const Menu = () => {
  const [aboutRef, setAboutRef] = useState()
  const [projectsRef, setProjectsRef] = useState()
  const [contactRef, setContactRef] = useState()
  const [rootRef, setRootRef] = useState()

  let node
  if (window.location.pathname.match('about')) {
    node = aboutRef
  }

  if (window.location.pathname.match('projects')) {
    node = projectsRef
  }

  if (window.location.pathname.match('contact')) {
    node = contactRef
  }

  const boundingClientRect =
    node && rootRef ? getRelativeBoundingClientRect(rootRef, node) : {}

  return (
    <Root ref={setRootRef}>
      <BoxUnderline
        top={boundingClientRect.top}
        width={boundingClientRect.width}
        height={boundingClientRect.height}
        left={boundingClientRect.left}
      />
      <AboutBox ref={setAboutRef}>
        <Link to="/about">About</Link>
      </AboutBox>

      <ProjectsBox ref={setProjectsRef}>
        <Link to="/projects">Projects</Link>
      </ProjectsBox>

      <ContactBox ref={setContactRef}>
        <Link to="/contact">Contact</Link>
      </ContactBox>
    </Root>
  )
}

export default Menu
