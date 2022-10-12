import React, { useState } from "react";
import styled from "styled-components";

import SectionWrapper from "./section-wrapper";

const projects = [
  {
    img: "/assets/imgs/mig.png",
    href: "https://mig.gerard.sh",
    title: "MiG Components",
    description: "React components inspired by MiG cockpits",
  },
  {
    img: "/assets/imgs/equation-circuit.png",
    href: "https://equation-solver.gerard.sh",
    title: "Equation Solver",
    description:
      "Equation solver using a circuit of constraints as seen on SICP 3.3.5",
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
    img: "/assets/imgs/counters.png",
    href: "https://counters.gerard.sh/",
    title: "Counters",
    description: "Create online shareable counters",
  },
  {
    img: "/assets/imgs/gaspt.jpg",
    href: "https://gaspt.gerard.sh",
    title: "gasPT",
    description: "Javascript path tracer based on smallPT",
  },
  {
    img: "/assets/imgs/weight.png",
    href: "https://github.com/gerardabello/weight",
    title: "Weight",
    description: "Neural network lib focused on ease of use",
  },
  {
    img: "/assets/imgs/envelope-graph.png",
    href: "https://www.npmjs.com/package/adsr-envelope-graph",
    title: "ADSR Graph",
    description: "Visualization of an ADSR envelope as a React component",
  },
  {
    img: "/assets/imgs/colossal.png",
    href: "https://colossal.gerard.sh",
    title: "Colossal",
    description: "A simple poly synth using Web Audio and React",
  },
  {
    img: "/assets/imgs/gooba.jpg",
    href: "http://play.google.com/store/apps/details?id=com.gerardas.gooba",
    title: "Gooba Monsters",
    description: "Android puzzle game",
  },
  {
    img: "/assets/imgs/fld.jpg",
    href: "http://upcommons.upc.edu/handle/2099.1/25191?locale-attribute=en",
    title: "Master thesis",
    description: "Robot loop detection",
  },
];

const Root = styled.div``;
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
`;
const Project = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(p) => p.theme.text};
`;

const ProjectImgWrapper = styled.div`
  line-height: 0;
  width: 100%;
`;

const ProjectImg = styled.img`
  width: 100%;

  filter: saturate(0) contrast(1.2);

  &:hover {
    filter: none;
  }

  transition: filter 0.2s ease-out;
`;

const ProjectTitle = styled.span`
  font-family: "Input Sans Condensed", monospace;
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
`;

const Link = styled.a`
  outline: none;
  border: none;
`;

const RotatedProjectTitle = ({ children }) => {
  const [rotation] = useState(Math.random() * 4 - 2);
  const [translation] = useState(Math.random() * 8 - 4);
  return (
    <ProjectTitle translation={translation} rotation={rotation}>
      {children}
    </ProjectTitle>
  );
};

const Projects = () => (
  <SectionWrapper>
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
);

export default Projects;
