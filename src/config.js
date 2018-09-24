export const darkTheme = {
  bodyFontWeight: 'normal',
  background: '#11151C',
  text: '#EAE3E0',
  color1: '#212D40',
  color2: '#364156',
  color3: '#7D4E57',
  color4: '#D66853'
}

export const lightTheme = {
  bodyFontWeight: 'bold',
  background: '#f3f1f0',
  text: '#23282f',
  color1: '#DEDEDE',
  color2: '#DEDEDE',
  color3: '#a78087',
  color4: '#d67761'
}

export const theme = Math.random() > 0.5 ? lightTheme : darkTheme
