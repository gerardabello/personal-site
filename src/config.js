import RetinaBackground from './retina-background'
import MovingBallsBackground from './moving-balls-background'

export const darkTheme = {
  backgroundComponent: RetinaBackground,
  bodyFontWeight: 'normal',
  background: '#11151C',
  text: '#EAE3E0',
  color2: '#364156',
  color4: '#D66853'
}

export const lightTheme = {
  backgroundComponent: MovingBallsBackground,
  bodyFontWeight: 'normal',
  background: '#f3f1f0',
  text: '#2b2b2b',
  color2: '#737272',
  color4: '#1e2bf5'
}

export const theme = Math.random() > 0.5 ? darkTheme : lightTheme
