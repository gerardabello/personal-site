import RetinaBackground from './retina-background'
import MovingBallsBackground from './moving-balls-background'
import PhysicsBackground from './physics-background'

import { isMobile, getRandomFromArray } from './utils'

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
  color2: '#737272',
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

let themes = [darkTheme, lightTheme]

if (window.DeviceMotionEvent != null && isMobile) {
  // It works on desktop, but it's fun only if the device has motion sensor
  themes.push(physicsTheme)
}

export const getTheme = excludeId => {
  const newTheme = getRandomFromArray(themes)

  if (excludeId && newTheme.id === excludeId) {
    return getTheme(excludeId)
  }

  return newTheme
}
