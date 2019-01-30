import Matter from 'matter-js'

const MoveView = (state, { screen }) => {
  const {
    joystick,
    physics,
    player,
  } = state

  // if (joystick.offset[0]) {
    Matter.Composite.translate(physics.world, {
      x: (joystick.offset[0] * -joystick.direction[0]) * 0.13,
      y: 0,
    })
  // }

  // if (joystick.active && (player.body.position.x >= (screen.width * 0.75))) {
  //   Matter.Composite.translate(physics.world, {
  //     x: (joystick.offset[0] * -joystick.direction[0]) * 0.13,
  //     y: 0,
  //   })
  // }

  // if (joystick.active && (player.body.position.x <= (screen.width * 0.25))) {
  //   Matter.Composite.translate(physics.world, {
  //     x: (joystick.offset[0] * -joystick.direction[0]) * 0.13,
  //     y: 0,
  //   })
  // }

  return state
}





export { MoveView }
