import React, { Component } from 'react'
import styled from 'styled-components'

import { SectionTitle } from './common'

const projects = [
  {
    img: '/assets/imgs/fld.jpg',
    href: 'http://upcommons.upc.edu/handle/2099.1/25191?locale-attribute=en',
    title: 'Master thesis',
    description: 'Robot loop detection'
  },
  {
    img: '/assets/imgs/gooba.jpg',
    href: 'http://play.google.com/store/apps/details?id=com.gerardas.gooba',
    title: 'Gooba Monsters',
    description: 'Android puzzle game'
  },
  {
    img: '/assets/imgs/colossal.png',
    href: 'http://gerardabello.gitlab.io/colossal',
    title: 'Colossal',
    description: 'A simple poly synth using Web Audio and React'
  },
  {
    img: '/assets/imgs/weight.png',
    href: 'https://gitlab.com/gerardabello/weight',
    title: 'Weight',
    description: 'Neural network lib focused on ease of use'
  },
  {
    img: '/assets/imgs/envelope-graph.png',
    href: 'https://www.npmjs.com/package/adsr-envelope-graph',
    title: 'ADSR Graph',
    description: 'Visualization of an ADSR envelope as a React component'
  }
]

const Root = styled.div`
  padding: 20px;
  max-width: 700px;
  position: relative;
`

const Grid = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

`

const Project = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 3px;

  box-shadow: rgba(0, 0, 0, 0.2) 0 0px 0px;
  transition: all 0.3s ease;
  &:hover{
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 8px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  color: white;

  opacity: 0;
  transition: opacity 0.3s ease;
`

export default class Projects extends Component {
  render () {
    return (
      <Root>
        <SectionTitle>Some interesting projects</SectionTitle>
        <Grid>
          {projects.map(p =>
            <Project key={p.title}>
              <a href={p.href}>
                <Img src={p.img} /><Hover> {p.title} </Hover>
              </a>
            </Project>
          )}
        </Grid>
      </Root>
    )
  }
}
