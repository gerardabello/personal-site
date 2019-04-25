import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Matter from 'matter-js'

const Root = styled.div`
  background-color: #ffffff;
  position: fixed;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const createEngine = element => {
  const width = window.innerWidth
  const height = window.innerHeight

  // module aliases
  const Render = Matter.Render
  const World = Matter.World
  const Bodies = Matter.Bodies

  // create an engine
  const engine = Matter.Engine.create()

  // create a renderer
  const render = Render.create({
    element,
    engine: engine,
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

  const ground = Bodies.rectangle(width / 2, height + 25, width, 50, {
    isStatic: true,
    friction
  })
  const topGround = Bodies.rectangle(width / 2, -25, width, 50, {
    isStatic: true,
    friction
  })
  const leftGround = Bodies.rectangle(-25, height / 2, 50, height, {
    isStatic: true,
    friction
  })
  const rightGround = Bodies.rectangle(width + 25, height / 2, 50, height, {
    isStatic: true,
    friction
  })

  // add all of the bodies to the world
  World.add(engine.world, [
    ...shapes,
    ground,
    rightGround,
    topGround,
    leftGround
  ])

  // run the engine
  Matter.Engine.run(engine)

  // run the renderer
  Render.run(render)

  return engine
}

const useGravity = () => {
  const [gravity, setGravity] = useState([0, 0])

  useEffect(() => {
    const handleMotion = event => {
      const y = event.accelerationIncludingGravity.y / 5
      const x = -event.accelerationIncludingGravity.x / 5
      setGravity([x, y])
    }

    window.addEventListener('devicemotion', handleMotion, false)
    return () => {
      window.removeEventListener('devicemotion', handleMotion)
    }
  }, [])

  return gravity
}

const Background = () => {
  const [gravityX, gravityY] = useGravity()
  const engineRef = useRef()
  const rootRef = useRef()

  if (engineRef.current) {
    engineRef.current.world.gravity.y = gravityY / 5
    engineRef.current.world.gravity.x = gravityX / 5
  }

  useEffect(() => {
    engineRef.current = createEngine(rootRef.current)
    return () => {}
  }, [])

  return <Root ref={rootRef} />
}

export default Background
