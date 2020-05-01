import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Ring from "./figures/ring";
import Zig from "./figures/zig";
import Half from "./figures/half";
import Plus from "./figures/plus";
import Hex from "./figures/hex";
import Triangle from "./figures/triangle";
import Square from "./figures/square";

import poissonDiscSampler from "./sampling";

const FIGURE_SHAPES = {
  ring: Ring,
  zig: Zig,
  half: Half,
  plus: Plus,
  hex: Hex,
  triangle: Triangle,
  square: Square,
};

const COLORS = [
  "#212D40",
  "#212D40",
  "#364156",
  "#364156",
  "#7D4E57",
  "#D66853",
];

const shapeAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  1% {
    transform: rotate(15deg);
  }

  40% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

function shuffle(iarray) {
  let array = [...iarray];
  let count = array.length;
  let randomnumber;
  let temp;
  while (count) {
    randomnumber = (Math.random() * count--) | 0;
    temp = array[count];
    array[count] = array[randomnumber];
    array[randomnumber] = temp;
  }

  return array;
}

const PreRoot = styled.div`
  background-color: #11151c;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  transform-origin: center;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0, 0, 0.18, 1.34);
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-name: ${shapeAnimation};

  * {
    transition: all 0.6s ease;
  }
`;

const generateShapes = (element) => {
  const width = element.clientWidth;
  const height = element.clientHeight;
  const scale = Math.min(0.7, width / 900);
  const margin = 100 * scale;
  const spacing = 200 * scale;
  let shapes = [];
  // width, height, radius
  const sampler = poissonDiscSampler(
    width + margin * 2,
    height + margin * 2,
    spacing
  );

  let sample;

  while ((sample = sampler())) {
    shapes.push({
      position: [sample[0] - margin, sample[1] - margin],
    });
  }

  const shapeList = Object.keys(FIGURE_SHAPES);

  shapes = shuffle(shapes);

  shapes = shapes.map((s, i) => ({
    position: s.position,
    shape: shapeList[i % shapeList.length],
  }));

  shapes = shuffle(shapes);

  shapes = shapes.map((s) => ({
    scale,
    position: s.position,
    shape: s.shape,
    animationDelay: Math.random() * 10,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

  return shapes;
};

const Shape = ({ shape }) => {
  const C = FIGURE_SHAPES[shape.shape];
  const contentCollision = shape.position[1] > window.innerHeight * 0.8;
  return (
    <Wrapper
      style={{
        left: `${shape.position[0]}px`,
        top: `${shape.position[1]}px`,
        animationDelay: `${shape.animationDelay}s`,
      }}
    >
      <div style={{ transform: `scale(${shape.scale})` }}>
        <C
          color={
            contentCollision
              ? COLORS[Math.round(shape.position[0]) % 2]
              : shape.color
          }
        />
      </div>
    </Wrapper>
  );
};

const Background = () => {
  const [shapes, setShapes] = useState([]);
  const rootRef = useRef();
  const lastWindowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (rootRef.current) {
      setShapes(generateShapes(rootRef.current));
    }
  }, []);

  useEffect(() => {
    const onResize = () => {
      const currentWindowSize = [window.innerWidth, window.innerHeight];
      if (
        rootRef.current &&
        currentWindowSize
          .map((v, i) => Math.abs(v - lastWindowSize.current[i]))
          .some((v) => v > 100)
      ) {
        setShapes(generateShapes(rootRef.current));
        lastWindowSize.current = currentWindowSize;
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <PreRoot ref={rootRef}>
      <Root>
        {shapes.map((s, i) => (
          <Shape key={i} shape={s} />
        ))}
      </Root>
    </PreRoot>
  );
};

export default Background;
