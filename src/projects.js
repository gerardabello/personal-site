import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from './layout'

import fldImg from '../assets/imgs/fld.jpg'
import goobaImg from '../assets/imgs/gooba.jpg'
import colossalImg from '../assets/imgs/colossal.png'
import weighImg from '../assets/imgs/weight.png'
import envelopeImg from '../assets/imgs/envelope-graph.png'
import gasptImg from '../assets/imgs/gaspt.jpg'

const projects = [
  {
    img: fldImg,
    href: 'http://upcommons.upc.edu/handle/2099.1/25191?locale-attribute=en',
    title: 'Master thesis',
    description: 'Robot loop detection'
  },
  {
    img: goobaImg,
    href: 'http://play.google.com/store/apps/details?id=com.gerardas.gooba',
    title: 'Gooba Monsters',
    description: 'Android puzzle game'
  },
  {
    img: colossalImg,
    href: 'https://colossal.surge.sh',
    title: 'Colossal',
    description: 'A simple poly synth using Web Audio and React'
  },
  {
    img: weighImg,
    href: 'https://github.com/gerardabello/weight',
    title: 'Weight',
    description: 'Neural network lib focused on ease of use'
  },
  {
    img: envelopeImg,
    href: 'https://www.npmjs.com/package/adsr-envelope-graph',
    title: 'ADSR Graph',
    description: 'Visualization of an ADSR envelope as a React component'
  },
  {
    img: gasptImg,
    href: 'https://gaspt.gerard.sh',
    title: 'gasPT',
    description: 'Javascript path tracer based on smallPT'
  }
]

const Root = styled.div``
const ProjectList = styled.div`
  width: max-content;
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 100%;
  }
`
const Project = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

const ProjectImgWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid #eae3e033;
  line-height: 0;
  margin-right: 16px;
  overflow: hidden;
`

const ProjectImg = styled.img`
  height: 86px;
  width: 86px;

  @media (max-width: 500px) {
    height: 64px;
    width: 64px;
  }

  filter: saturate(0) contrast(1.2);
`

const ProjectTitle = styled.span`
  font-family: 'GT Pressura Mono', sans-serif;
  color: #eae3e0;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const Link = styled.a`
  outline: none;
  border: none;
`

export default class Projects extends Component {
  render () {
    return (
      <Root>
        <Layout title='Projects'>
          <ProjectList>
            {projects.map(project => (
              <Link key={project.title} href={project.href}>
                <Project>
                  <ProjectImgWrapper>
                    <ProjectImg src={project.img} />
                  </ProjectImgWrapper>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </Project>
              </Link>
            ))}
          </ProjectList>
        </Layout>
      </Root>
    )
  }
}
