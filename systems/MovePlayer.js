import Matter from 'matter-js'





const MovePlayer = state => {
  const {
    joystick,
    player,
  } = state
  const { body } = player

  // if (joystick.active || (body.velocity.x > 0)) {
  //   joystick.offset[0]
    player.speed = (joystick.offset[0] * joystick.direction[0]) * 0.13

    Matter.Body.setVelocity(body, {
      x: (joystick.active ? player.speed : 0),
      y: 0,
    })
  // }

  if (joystick.active) {
    player.direction = joystick.direction[0]
  }

  if (body.velocity.x !== 0) {
    if (Math.abs(player.speed) > 2) {
      player.animation = 'run'
    } else {
      player.animation = 'walk'
    }
  } else {
    player.animation = 'stand'
  }

  return {
    ...state,
    player,
  }
}





export { MovePlayer }
