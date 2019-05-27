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
  ],
  2
)}`

const Root = styled.div`
  animation: ${appearBottom} 2s linear;
`

export default ({ children }) => <Root>{children}</Root>
