import styled from "styled-components";
import { useEffect, useState } from "react";

const Root = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: radial-gradient(circle at 50% 50%, rgb(13 18 42), rgb(1 29 24)); ;
`;

const Noise = () => {
  const [octaves] = useState(2);
  const [baseFrequency] = useState(0.65);

  return (
    <svg
      style={{
        display: "block",
        "mix-blend-mode": "color-dodge",
      }}
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves={octaves}
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

const GrainyBackground = () => {
  return (
    <Root>
      <Noise />
    </Root>
  );
};

export default GrainyBackground;
