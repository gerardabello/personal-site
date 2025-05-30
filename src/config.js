import styled from "styled-components";

import dynamic from "next/dynamic";

const RetinaBackground = dynamic(() => import("./retina-background"), {
  ssr: false,
});

import MovingBallsBackground from "./moving-balls-background";

import { getRandomFromArray } from "./utils";

const NoBackground = styled.div``;

const PhysicsBackground = dynamic(() => import("./physics-background"));

export const darkTheme = {
  id: "dark",
  backgroundComponent: RetinaBackground,
  bodyFontWeight: "bolder",
  background: "#171717",
  text: "#FFFFFF",
  color4: "#F7CF33",
  headingTextShadow: "#171717 4px 4px, black 0 0 60px",
  bodyTextShadow: "#171717 2px 2px",
  titleFontWeight: "800",
  bodyFontWeight: "400",
  nomFilter: "invert(1)",
};

export const lightTheme = {
  id: "light",
  backgroundComponent: MovingBallsBackground,
  bodyFontWeight: "normal",
  background: "#f3f1f0",
  text: "#000000",
  color4: "#1e2bf5",
  titleFontWeight: "800",
  bodyFontWeight: "400",
  nomFilter: "none",
};

export const physicsTheme = {
  id: "physics",
  backgroundComponent: PhysicsBackground,
  bodyFontWeight: "normal",
  background: "#ffffff",
  text: "#000000",
  color4: "#ff0000",
  titleFontWeight: "800",
  bodyFontWeight: "400",
  nomFilter: "none",
};

export const gifTheme = {
  id: "gif",
  backgroundComponent: NoBackground,
  bodyFontWeight: "normal",
  background: "#000000",
  text: "#e8e8e8",
  color4: "#ffcc66",
  textBackgroundGif: "/assets/imgs/trippy.gif",
  titleFontWeight: "900",
  bodyFontWeight: "400",
  nomFilter:
    "invert(1) sepia(1) brightness(0.6) saturate(13) hue-rotate(-63deg)",
};

let themes = [darkTheme, lightTheme];

if (typeof window !== "undefined") {
  if (
    window.DeviceMotionEvent != null &&
    window.innerHeight > window.innerWidth
  ) {
    // It works on desktop, but it's fun only if the device has motion sensor
    themes.push(physicsTheme);
  }

  if (
    CSS.supports &&
    (CSS.supports("-webkit-background-clip", "text") ||
      CSS.supports("background-clip", "text"))
  ) {
    themes.push(gifTheme);
  }
}

export const getRandomThemeId = (currentThemeId) => {
  if (!currentThemeId) {
    return getRandomFromArray(themes).id;
  }

  const currentIndex = themes.findIndex((theme) => theme.id === currentThemeId);

  return themes[(currentIndex + 1) % themes.length].id;
};

export const getTheme = (id) => {
  return themes.find((t) => t.id === id) ?? lightTheme;
};
