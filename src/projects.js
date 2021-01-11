import React, { useState } from 'react'
import styled from 'styled-components'

import SectionWrapper from './section-wrapper'

import fldImg from '../assets/imgs/fld.jpg'
import countersImg from '../assets/imgs/counters.png'
import goobaImg from '../assets/imgs/gooba.jpg'
import colossalImg from '../assets/imgs/colossal.png'
import weighImg from '../assets/imgs/weight.png'
import envelopeImg from '../assets/imgs/envelope-graph.png'
import gasptImg from '../assets/imgs/gaspt.jpg'
import circuitEquationImg from '../assets/imgs/equation-circuit.png'

const projects = [
  {
    img: circuitEquationImg,
    href: 'https://equation-solver.gerard.sh',
    title: 'Equation Solver',
    description:
      'Equation solver using a circuit of constraints as seen on SICP 3.3.5',
  },
  /*
  {
    img: unwelchImg,
    href: 'https://unwel.ch/',
    title: 'Unwelch',
    description: 'Friendly betting'
  },
  */
  {
    img: countersImg,
    href: 'https://counters.gerard.sh/',
    title: 'Counters',
    description: 'Create online shareable counters',
  },
  {
    img: gasptImg,
    href: 'https://gaspt.gerard.sh',
    title: 'gasPT',
    description: 'Javascript path tracer based on smallPT',
  },
  {
    img: weighImg,
    href: 'https://github.com/gerardabello/weight',
    title: 'Weight',
    description: 'Neural network lib focused on ease of use',
  },
  {
    img: envelopeImg,
    href: 'https://www.npmjs.com/package/adsr-envelope-graph',
    title: 'ADSR Graph',
    description: 'Visualization of an ADSR envelope as a React component',
  },
  {
    img: colossalImg,
    href: 'https://colossal.gerard.sh',
    title: 'Colossal',
    description: 'A simple poly synth using Web Audio and React',
  },
  {
    img: goobaImg,
    href: 'http://play.google.com/store/apps/details?id=com.gerardas.gooba',
    title: 'Gooba Monsters',
    description: 'Android puzzle game',
  },
  {
    img: fldImg,
    href: 'http://upcommons.upc.edu/handle/2099.1/25191?locale-attribute=en',
    title: 'Master thesis',
    description: 'Robot loop detection',
  },
]

const Root = styled.div``
const ProjectList = styled.div`
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-gap: 40px;
  }
`
const Project = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(p) => p.theme.color2} -4px 4px;
`

const ProjectImgWrapper = styled.div`
  line-height: 0;
  width: 100%;
`

const ProjectImg = styled.img`
  width: 100%;

  filter: saturate(0) contrast(1.2);

  &:hover {
    filter: none;
  }

  transition: filter 0.2s ease-out;
`

const ProjectTitle = styled.span`
  font-family: 'Input Sans Condensed', monospace;
  //background: ${(p) => p.theme.text};
  font-size: 20px;
  font-weight: ${(p) => p.theme.bodyFontWeight};
  position: absolute;
  color: ${(p) => p.theme.text};
  text-align: center;
  top: calc(100% + 8px);
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const Link = styled.a`
  outline: none;
  border: none;
`

const RotatedProjectTitle = ({ children }) => {
  const [rotation] = useState(Math.random() * 4 - 2)
  const [translation] = useState(Math.random() * 8 - 4)
  return (
    <ProjectTitle translation={translation} rotation={rotation}>
      {children}
    </ProjectTitle>
  )
}

const Projects = () => (
  <SectionWrapper title="Projects" titleMargin="8vh">
    <Root>
      <ProjectList>
        {projects.map((project) => (
          <Link key={project.title} href={project.href}>
            <Project>
              <ProjectImgWrapper>
                <ProjectImg src={project.img} />
              </ProjectImgWrapper>
              <RotatedProjectTitle>{project.title}</RotatedProjectTitle>
            </Project>
          </Link>
        ))}
      </ProjectList>
    </Root>
  </SectionWrapper>
)

export default Projects
