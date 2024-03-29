import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ANIMATION_TIME = 5;
const COLORS = ["#d3d6f3", "#f7e6af", "#f5cdcc"];

const FromToRandom = (from, to) => (rand) => from + (to - from) * rand;

const RadiusRand = FromToRandom(0.2, 0.8);

const Root = styled.div`
  background-color: #f3f1f0;
  position: absolute;
  overflow: hidden;

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Circle = styled.div`
  background-color: ${(p) => p.color};
  position: absolute;

  left: calc(${(p) => p.left}vw - ${(p) => p.size / 2}vw);
  top: calc(
    30vh + calc(calc(30vh * ${(p) => p.index}) - ${(p) => p.size / 2}vw) +
      calc(40vw * ${(p) => p.index})
  );

  height: ${(p) => p.size}vw;
  width: ${(p) => p.size}vw;

  border-radius: ${(p) =>
    `${p.a * 100}% ${(1 - p.a) * 100}% ${(1 - p.b) * 100}% ${p.b * 100}% / ${
      (1 - p.c) * 100
    }% ${(1 - p.d) * 100}% ${p.d * 100}% ${p.c * 100}%`};
  transform: rotate(${(p) => p.r * 360}deg);
  transition: all ${ANIMATION_TIME}s ease;
`;

const Ball = ({ index }) => {
  const [rotation] = useState(1.234);
  const [size] = useState(60);

  const [leftPos] = useState(index % 2 === 0 ? 0 : 100);

  const [a, setA] = useState(0.32);
  const [b, setB] = useState(0.501);
  const [c, setC] = useState(0.49);
  const [d, setD] = useState(0.53);

  useEffect(() => {
    const randomizeBall = () => {
      setA(RadiusRand(Math.random()));
      setB(RadiusRand(Math.random()));
      setC(RadiusRand(Math.random()));
      setD(RadiusRand(Math.random()));
    };
    const interval = setInterval(randomizeBall, ANIMATION_TIME * 1000);
    setTimeout(randomizeBall, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Circle
      color={COLORS[index % COLORS.length]}
      a={a}
      b={b}
      c={c}
      d={d}
      r={rotation}
      size={size}
      left={leftPos}
      index={index}
    />
  );
};

const MovingBallsBackground = () => {
  return (
    <Root>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Ball key={i} index={i} />
      ))}
    </Root>
  );
};

export default MovingBallsBackground;
