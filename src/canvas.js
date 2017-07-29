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

  for (let i = 0; i < 10; i++) {
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

const newPoint = (center, size = 200) => {
  return {
    x: center.x + (Math.random() - 0.5) * size,
    y: center.y + (Math.random() - 0.5) * size
  }
}

const animate = () => {
  // call again next time we can draw
  window.requestAnimationFrame(animate)
  // clear canvas
  ctx.clearRect(0, 0, cvWidth, cvHeight)
  // draw everything
  //

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
