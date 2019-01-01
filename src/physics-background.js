import React from 'react'
import styled from 'styled-components'
import Matter from 'matter-js'

const Root = styled.div`
  background-color: #ffffff;
  position: absolute;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

class Background extends React.Component {
  componentDidMount () {
    const width = window.innerWidth
    const height = window.innerHeight

    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies

    // create an engine
    this.engine = Engine.create()

    // create a renderer
    var render = Render.create({
      element: this.ref,
      engine: this.engine,
      options: {
        wireframes: false,
        width,
        height,
        background: '#FFFFFF'
      }
    })

    const friction = 0.1

    const boxColor = '#EEEEEE'

    const shapes = [
      // create two boxes and a ground
      Bodies.rectangle(width / 2 - 20, 25, 100, 100, {
        density: 0.1,
        friction,
        render: {
          fillStyle: boxColor,
          lineWidth: 0
        }
      }),
      Bodies.rectangle(width / 2 + 20, 120, 80, 80, {
        density: 0.1,
        friction,
        render: {
          fillStyle: boxColor,
          lineWidth: 0
        }
      }),
      Bodies.rectangle(width / 2 - 20, 235, 60, 60, {
        density: 0.1,
        friction,
        render: {
          fillStyle: boxColor,
          lineWidth: 0
        }
      }),

      Bodies.rectangle(width / 2 + 20, 320, 120, 120, {
        density: 0.1,
        friction,
        render: {
          fillStyle: boxColor,
          lineWidth: 0
        }
      })
    ]

    var ground = Bodies.rectangle(width / 2, height + 25, width, 50, {
      isStatic: true,
      friction
    })
    var topGround = Bodies.rectangle(width / 2, -25, width, 50, {
      isStatic: true,
      friction
    })
    var leftGround = Bodies.rectangle(-25, height / 2, 50, height, {
      isStatic: true,
      friction
    })
    var rightGround = Bodies.rectangle(width + 25, height / 2, 50, height, {
      isStatic: true,
      friction
    })

    // add all of the bodies to the world
    World.add(this.engine.world, [
      ...shapes,
      ground,
      rightGround,
      topGround,
      leftGround
    ])

    // run the engine
    Engine.run(this.engine)

    // run the renderer
    Render.run(render)

    window.addEventListener('devicemotion', this.handleMotion.bind(this), false)
  }

  handleMotion (event) {
    this.engine.world.gravity.y = event.accelerationIncludingGravity.y / 5
    this.engine.world.gravity.x = -event.accelerationIncludingGravity.x / 5
  }

  render () {
    return <Root innerRef={r => (this.ref = r)} />
  }
}

export default Background
