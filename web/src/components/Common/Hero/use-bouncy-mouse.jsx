import React from 'react'

export const useBouncyMouse = (cursorId) => {
  const animationRef = React.useRef()
  const previousMouse = React.useRef({ x: 0, y: 0 }).current
  const mouse = React.useRef({ x: 0, y: 0 }).current
  const circle = React.useRef({ x: 0, y: 0 }).current
  const currentScale = React.useRef({ scale: 0 }).current
  const currentAngle = React.useRef({ angle: 0 }).current
  const speed = 0.17
  
  const tick = () => {
    const cursor = document && document.getElementById(cursorId || 'cursor')

    // Calculate circle movement based on mouse position and smoothing
    circle.x += (mouse.x - circle.x) * speed
    circle.y += (mouse.y - circle.y) * speed

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`

    // SQUEEZE
    // 1. Calculate the change in mouse position (deltaMouse)
    const deltaMouseX = mouse.x - previousMouse.x
    const deltaMouseY = mouse.y - previousMouse.y

    // Update previous mouse position for the next frame
    previousMouse.x = mouse.x
    previousMouse.y = mouse.y

    // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
    const mouseVelocity = Math.min(
      Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
      150
    )
    // 3. Convert mouse velocity to a value in the range [0, 0.5]
    const scaleValue = (mouseVelocity / 150) * 0.5
    // 4. Smoothly update the current scale
    currentScale.scale += (scaleValue - currentScale.scale) * speed
    // 5. Create a transformation string for scaling
    const scaleTransform = `scale(${1 + currentScale.scale}, ${
      1 - currentScale.scale
    })`

    // ROTATE
    // 1. Calculate the angle using the atan2 function
    const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI
    // 2. Check for a threshold to reduce shakiness at low mouse velocity
    if (mouseVelocity > 20) {
      currentAngle.angle = angle
    }
    // 3. Create a transformation string for rotation
    const rotateTransform = `rotate(${currentAngle.angle}deg)`

    cursor.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`
    animationRef.current = requestAnimationFrame(tick)
  }

  React.useEffect(() => {
    animationRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  const onMouseMove = (e) => {
    mouse.x = e.pageX
    mouse.y = e.pageY
  }

  return { onMouseMove }
}
