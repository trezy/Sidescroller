import { getEuclidianDistance } from '../helpers'





const MoveJoystick = (state, { touches }) => {
  const { joystick } = state
  const end = touches.find(x => x.type === 'end')
  const move = touches.find(x => x.type === 'move')
  const start = touches.find(x => x.type === 'start')

  let direction = null
  let distanceFromOrigin = null
  let offset = null

  if (start || move) {
    const { event } = start || move
    const eventPosition = [event.pageX, event.pageY]

    distanceFromOrigin = getEuclidianDistance([joystick.origin[0], joystick.origin[1]], eventPosition)
    offset = [
      eventPosition[0] - joystick.origin[0],
      eventPosition[1] - joystick.origin[1],
    ]

    direction = [
      Math.sign(offset[0]),
      Math.sign(offset[1]),
    ]

    offset[0] = Math.min(Math.abs(offset[0]), joystick.maxOffset)
    // offset[1] = Math.min(Math.abs(offset[1]), joystick.maxOffset)
    offset[1] = 0
  }

  if (start && (distanceFromOrigin < (joystick.size[0] / 2))) {
    joystick.active = true
  }

  if (offset && joystick.active) {
    joystick.direction = direction
    joystick.offset = offset
  }

  if (end && joystick.active) {
    joystick.active = false
    joystick.direction = [0, 0]
    joystick.offset = [0, 0]
  }

  return {
    ...state,
    joystick,
  }
}





export { MoveJoystick }
