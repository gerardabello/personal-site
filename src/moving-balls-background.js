import React from 'react'
import styled from 'styled-components'

const FromToRandom = (from, to) => rand => from + (to - from) * rand

const SizeRand = FromToRandom(70, 120)
const PositionRand = FromToRandom(-10, 10)
const RadiusRand = FromToRandom(0.2, 0.8)

const Root = styled.div`
  background-color: #f3f1f0;
  position: fixed;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const Circle = styled.div`
  background-color: ${p => p.color};
  position: absolute;

  left: calc(${p => p.left}vw - ${p => p.size / 2}vw);
  top: calc(${p => p.top}vh - ${p => p.size / 2}vw);

  height: ${p => p.size}vw;
  width: ${p => p.size}vw;

  border-radius: ${p =>
    `${p.a * 100}% ${(1 - p.a) * 100}% ${(1 - p.b) * 100}% ${p.b *
      100}% / ${(1 - p.c) * 100}% ${(1 - p.d) * 100}% ${p.d * 100}% ${p.c *
      100}%`};
  transform: rotate(${p => p.r * 360}deg);
  transition: all 1.5s ease;
`

class Background extends React.Component {
  render () {
    const topPos1 = FromToRandom(0, 100)(Math.random())
    const topPos2 = (topPos1 + 50) % 100 + FromToRandom(-5, 5)(Math.random())

    return (
      <Root>
        <Circle
          color='#d3d6f3'
          a={RadiusRand(Math.random())}
          b={RadiusRand(Math.random())}
          c={RadiusRand(Math.random())}
          d={RadiusRand(Math.random())}
          r={Math.random()}
          size={SizeRand(Math.random())}
          left={PositionRand(Math.random())}
          top={topPos1}
        />

        <Circle
          color='#f7e6af'
          a={RadiusRand(Math.random())}
          b={RadiusRand(Math.random())}
          c={RadiusRand(Math.random())}
          d={RadiusRand(Math.random())}
          r={Math.random()}
          size={SizeRand(Math.random())}
          left={100 - PositionRand(Math.random())}
          top={topPos2}
        />
      </Root>
    )
  }
}

export default Background
