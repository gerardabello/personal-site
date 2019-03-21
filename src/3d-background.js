import React from 'react'
import styled from 'styled-components'
import useRelativeDeviceOrientation from './hooks/useRelativeDeviceOrientation'

const Root = styled.div`
  background-color: #ffffff;
  position: fixed;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const Square = styled.div.attrs({
  style: ({ rotationX, rotationY, rotationIndex }) => ({
    transform: `translate3d(-50%, -50%, 0) 
    scale(${1 - Math.abs(rotationY) / 500},${1 - Math.abs(rotationX) / 500})
    rotate3d(
      1,
      0,
      0,
      ${(rotationX / 10) * rotationIndex}deg
    )
    rotate3d(
      0,
      1,
      0,
      ${(rotationY / 10) * rotationIndex}deg
    )
    `
  })
})`
  transform-origin: center center -${props => props.rotationIndex * 30}px;

  position: absolute;
  left: 50%;
  top: 50%;
  width: 30vw;
  height: 30vw;
  background: ${props => props.color};
`

const Background = () => {
  const { beta, gamma } = useRelativeDeviceOrientation()

  return (
    <Root>
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#FFFFFF'
        rotationIndex={0}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#DDDDDD'
        rotationIndex={1}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#BBBBBB'
        rotationIndex={2}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#999999'
        rotationIndex={3}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#777777'
        rotationIndex={4}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#555555'
        rotationIndex={5}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#333333'
        rotationIndex={6}
      />
      <Square
        rotationX={-beta}
        rotationY={gamma}
        color='#111111'
        rotationIndex={7}
      />
    </Root>
  )
}

export default Background
