import React from 'react'
import styled from 'styled-components'
import useRelativeDeviceOrientation from './hooks/useRelativeDeviceOrientation'

const Root = styled.div`
  background-color: #000000;
  position: fixed;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const SIZE = 33

const StackRoot = styled.div`
  position: relative;
  left: ${props => SIZE * 0.25 + props.posX * SIZE * 1.5}vw;
  top: ${props => SIZE * 0.25 + props.posY * SIZE * 1.5}vw;
`

const Square = styled.div.attrs({
  style: ({ rotationX, rotationY, rotationIndex }) => ({
    transform: `
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
  width: ${SIZE}vw;
  height: ${SIZE}vw;
  background: ${props => props.color};
  z-index: ${props => props.rotationIndex};
`
const Stack = ({ posX, posY, rotationX, rotationY }) => (
  <StackRoot posX={posX} posY={posY}>
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#111'
      rotationIndex={0}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#111'
      rotationIndex={1}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#222'
      rotationIndex={2}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#333'
      rotationIndex={3}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#444'
      rotationIndex={4}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#555'
      rotationIndex={5}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#666'
      rotationIndex={6}
    />
    <Square
      rotationX={rotationX}
      rotationY={rotationY}
      color='#777'
      rotationIndex={7}
    />
  </StackRoot>
)

const Background = () => {
  const { beta, gamma } = useRelativeDeviceOrientation()

  console.log('beta: ', beta, ' gamma: ', gamma)
  return (
    <Root>
      {[-1, 0, 1, 2].map(ix =>
        [-1, 0, 1, 2, 3].map(iy => (
          <Stack
            key={`${ix}-${iy}`}
            rotationX={-beta}
            rotationY={gamma}
            posX={ix}
            posY={iy}
          />
        ))
      )}
    </Root>
  )
}

export default Background
