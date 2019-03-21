import { useState, useEffect } from 'react'

const SET_INITIAL_AT = 1000

function useInitialDeviceOrientation () {
  const [initialOrientation, setInitialOrientation] = useState({
    absolute: false,
    alpha: null,
    beta: null,
    gamma: null
  })

  const [date] = useState(new Date())

  useEffect(() => {
    function handleDeviceOrientation (event) {
      if (new Date() - date <= SET_INITIAL_AT) {
        setInitialOrientation({
          absolute: event.absolute,
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma
        })
      }
    }

    window.addEventListener('deviceorientation', handleDeviceOrientation, true)

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation)
    }
  }, [])

  return initialOrientation
}

function useRelativeDeviceOrientation () {
  const initialOrientation = useInitialDeviceOrientation()

  const [deviceOrientation, setDeviceOrientation] = useState({
    absolute: false,
    alpha: null,
    beta: null,
    gamma: null
  })

  useEffect(() => {
    function handleDeviceOrientation (event) {
      setDeviceOrientation({
        absolute: event.absolute,
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma
      })
    }

    window.addEventListener('deviceorientation', handleDeviceOrientation, true)

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation)
    }
  }, [])

  return {
    absolute: deviceOrientation.absolute,
    alpha: deviceOrientation.alpha - initialOrientation.alpha,
    beta: deviceOrientation.beta - initialOrientation.beta,
    gamma: deviceOrientation.gamma - initialOrientation.gamma
  }
}

export default useRelativeDeviceOrientation
