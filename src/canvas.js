import R from 'ramda'

let ctx
let cvWidth
let cvHeight
let triangles = []

const draw = canvas => {
  ctx = canvas.getContext('2d')
  cvWidth = canvas.clientWidth
  cvHeight = canvas.clientHeight
  ctx.canvas.width = cvWidth
  ctx.canvas.height = cvHeight

  const n = Math.floor(cvWidth * cvHeight / Math.pow(200, 2))

  for (let i = 0; i < n; i++) {
    triangles.push(newTriangle())
  }

  animate()
}

const triangleOrientation = triangle => {
  let sum = 0.0
  const n = triangle.points.length
  for (let i = 0; i < n; i++) {
    let v1 = triangle.points[i]
    let v2 = triangle.points[(i + 1) % n] // % is the modulo operator
    sum += (v2.x - v1.x) * (v2.y + v1.y)
  }
  return sum > 0.0
}

const newTriangle = () => {
  let points = []

  let center = {
    x: Math.random() * cvWidth,
    y: Math.random() * cvHeight
  }

  for (let i = 0; i < 3; i++) {
    points.push(newPoint(center))
  }

  return {
    points
  }
}

const newPoint = (center, size = 200, vel = 20) => {
  return {
    x: center.x + (Math.random() - 0.5) * size,
    y: center.y + (Math.random() - 0.5) * size,
    vx: (Math.random() - 0.5) * vel,
    vy: (Math.random() - 0.5) * vel
  }
}

const average = R.converge(R.divide, [R.sum, R.length])
const axisAverage = (axis, list) => {
  return average(R.map(R.prop(axis), list))
}

const distance = (point1, point2) => {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
  )
}

const unitaryVector = (point1, point2) => {
  const d = distance(point1, point2)
  return { x: (point2.x - point1.x) / d, y: (point2.y - point1.y) / d }
}

const animate = () => {
  const dt = 1 / 60

  // call again next time we can draw
  window.requestAnimationFrame(animate)
  // clear canvas
  ctx.clearRect(0, 0, cvWidth, cvHeight)
  // draw everything

  triangles = triangles.map(triangle => {
    const center = {
      x: axisAverage('x', triangle.points),
      y: axisAverage('y', triangle.points)
    }

    return Object.assign({}, triangle, {
      points: triangle.points.map(point => {
        const absSpringForce = 0.0001 * Math.pow(distance(point, center), 2)
        const uVecToCenter = unitaryVector(point, center)
        const springForce = {
          x: uVecToCenter.x * absSpringForce,
          y: uVecToCenter.y * absSpringForce
        }
        const vx = point.vx + springForce.x * dt
        const vy = point.vy + springForce.y * dt

        return {
          x: point.x + vx * dt,
          y: point.y + vy * dt,
          vx,
          vy
        }
      })
    })
  })

  triangles.map(triangle => {
    // Filled triangle
    ctx.beginPath()
    ctx.moveTo(triangle.points[0].x, triangle.points[0].y)
    ctx.lineTo(triangle.points[1].x, triangle.points[1].y)
    ctx.lineTo(triangle.points[2].x, triangle.points[2].y)
    if (triangleOrientation(triangle)) {
      ctx.fillStyle = '#EFF3FB'
    } else {
      ctx.fillStyle = '#E1F6F1'
    }
    ctx.fill()
  })
}

export default draw
