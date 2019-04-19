import { lazy } from 'react'
import styled from 'styled-components'

import trippyGif from '../assets/imgs/trippy.gif'

import RetinaBackground from './retina-background'
import MovingBallsBackground from './moving-balls-background'

import { isMobile, getRandomFromArray } from './utils'

const NoBackground = styled.div``

const PhysicsBackground = lazy(() =>
  import(/* webpackChunkName: "physicsBG" */ './physics-background')
)

export const darkTheme = {
  id: 'dark',
  backgroundComponent: RetinaBackground,
  bodyFontWeight: 'normal',
  background: '#11151C',
  text: '#EAE3E0',
  color2: '#364156',
  color4: '#D66853'
}

export const lightTheme = {
  id: 'light',
  backgroundComponent: MovingBallsBackground,
  bodyFontWeight: 'normal',
  background: '#f3f1f0',
  text: '#2b2b2b',
  color2: '#3c3a39',
  color4: '#1e2bf5'
}

export const physicsTheme = {
  id: 'physics',
  backgroundComponent: PhysicsBackground,
  bodyFontWeight: 'normal',
  background: '#ffffff',
  text: '#000000',
  color2: '#000000',
  color4: '#ff0000'
}

export const gifTheme = {
  id: 'gif',
  backgroundComponent: NoBackground,
  bodyFontWeight: 'normal',
  background: '#000000',
  text: '#e8e8e8',
  color2: '#616161',
  color4: '#e8e8e8',
  textBackgroundGif: trippyGif
}

let themes = [darkTheme, lightTheme]

if (window.DeviceMotionEvent != null && isMobile) {
  // It works on desktop, but it's fun only if the device has motion sensor
  themes.push(physicsTheme)
}

if (
  CSS.supports &&
  (CSS.supports('-webkit-background-clip', 'text') ||
    CSS.supports('background-clip', 'text'))
) {
  themes.push(gifTheme)
}

export const getTheme = currentTheme => {
  if (!currentTheme) {
    return getRandomFromArray(themes)
  }

  const currentIndex = themes.findIndex(theme => theme.id === currentTheme.id)

  return themes[(currentIndex + 1) % themes.length]
}
