import React from 'react'

const bluePalette = [
  'rgb(0, 203, 198)',
  'rgb(56, 165, 207)',
  'rgb(63, 115, 164)',
  'rgb(89, 83, 132)',
  'rgb(83, 67, 99)'
]

const grayPalette = [
  'rgb(25, 25, 25)',
  'rgb(60, 60, 60)',
  'rgb(100, 100, 100)',
  'rgb(140, 140, 140)',
  'rgb(180, 180, 180)',
  'rgb(240, 240, 240)'
]

const minSwapTime = 10000
const maxSwapTime = 50000

export default function Square (WrappedComponent) {
  return class extends React.Component {
    constructor (...args) {
      super(...args)

      this.onMouseEnter = this.onMouseEnter.bind(this)
      this.onMouseLeave = this.onMouseLeave.bind(this)
      this.setNewColor = this.setNewColor.bind(this)

      this.state = {
        hover: false,
        backgroundColor: 'rgb(128,128,128)',
        hoverColor: 'hsl(' + Math.round(Math.random() * 360) + ', 37%, 27%)'
      }

      setTimeout(this.setNewColor, 500)
    }

    setNewColor () {
      this.setState({backgroundColor: this.randomGrayColor()})
      setTimeout(
        this.setNewColor,
        minSwapTime + Math.random() * (maxSwapTime - minSwapTime)
      )
    }

    onMouseLeave () {
      this.setState({hover: false})
    }

    onMouseEnter () {
      this.setState({hover: true})
    }

    randomGrayColor () {
      let v = Math.round(Math.random() * 255)

      if (v > 115 && v <= 128) {
        // as we use the difference mix, we dont want a value near 128
        v = 115
      } else if (v > 128 && v <= 140) {
        // as we use the difference mix, we dont want a value near 128
        v = 140
      } else if (v > 240) {
        // no pure black
        v = 240
      } else if (v < 25) {
        // no pure white
        v = 25
      }

      return `rgb(${v},${v},${v})`
    }

    randomPaletteColor (palette) {
      return palette[Math.floor(Math.random() * palette.length)]
    }

    render () {
      const bc = this.state.hover
        ? this.state.hoverColor
        : this.state.backgroundColor

      return (
        <div
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{
            backgroundColor: bc,
            transition: 'background-color 0.3s ease'
          }}
        >
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
