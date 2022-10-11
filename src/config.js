import styled from "styled-components";

import dynamic from "next/dynamic";

const RetinaBackground = dynamic(() => import("./retina-background"), {
  ssr: false,
});

import MovingBallsBackground from "./moving-balls-background" 

import { getRandomFromArray } from "./utils";

const NoBackground = styled.div``;

const PhysicsBackground = dynamic(() => import("./physics-background"));

export const darkTheme = {
  id: "dark",
  backgroundComponent: RetinaBackground,
  bodyFontWeight: "normal",
  background: "#11151C",
  text: "#EAE3E0",
  color4: "#D66853",
  textShadow: "#11151C 0 0 20px",
};

export const lightTheme = {
  id: "light",
  backgroundComponent: MovingBallsBackground,
  bodyFontWeight: "normal",
  background: "#f3f1f0",
  text: "#2b2b2b",
  color4: "#1e2bf5",
};

export const physicsTheme = {
  id: "physics",
  backgroundComponent: PhysicsBackground,
  bodyFontWeight: "normal",
  background: "#ffffff",
  text: "#000000",
  color4: "#ff0000",
};

export const gifTheme = {
  id: "gif",
  backgroundComponent: NoBackground,
  bodyFontWeight: "normal",
  background: "#000000",
  text: "#e8e8e8",
  color4: "#ffcc66",
  textBackgroundGif: "/assets/imgs/trippy.gif",
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
