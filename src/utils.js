export const isMobile =
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)

export const getRandomFromArray = array =>
  array[Math.floor(Math.random() * array.length)]

export const createStaticGlobalStyles = styleString => {
  const styleNode = document.createElement('style')
  document.getElementsByTagName('head')[0].appendChild(styleNode)
  styleNode.type = 'text/css'
  styleNode.appendChild(document.createTextNode(styleString))
}
