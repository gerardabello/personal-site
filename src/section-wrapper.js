import React from 'react'
import styled, { keyframes } from 'styled-components'
import { generateKeyframes } from 'spring-animation-keyframes'

const appearBottom = keyframes`${generateKeyframes(
  [
    {
      tension: 180,
      friction: 30,
      from: 10,
      to: 0,
      unit: 'px',
      property: 'translateY'
    },
    {
      tension: 200,
      friction: 40,
      from: 0,
      to: 1,
      unit: '',
      property: 'opacity'
    }
  ]
)}`

const Root = styled.div`
  animation: ${appearBottom} 2s linear 2s backwards;
  margin-bottom: 20vh;
`

const Title = styled.h2`
  font-family: 'Barlow Semi Condensed', sans-serif;
  letter-spacing: 1px;
  font-weight: 900;
  margin: 0;

  border-bottom: 4px solid ${props => props.theme.color4};

  font-size: 38px;
  @media (max-width: 500px) {
    font-size: 32px;
  }
  @media (max-width: 350px) {
    font-size: 28px;
  }

  margin-bottom: ${props => props.titleMargin};
    text-transform: uppercase;
    width: fit-content;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${props =>
    props.theme.textBackgroundGif &&
    `
      background-image: url(${props.theme.textBackgroundGif});
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;

          background-size: 130%;
    background-position: center;
  `}
`

export default ({ children, title, titleMargin = '5vh'}) => <Root>{
  title && <Title titleMargin={titleMargin}>{title}</Title>
  }{children}</Root>
