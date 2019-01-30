import Matter from 'matter-js'





const Physics = (state, { time }) => {
  const { engine } = state.physics

  Matter.Engine.update(engine, time.delta)

  return {
    ...state,
    engine,
  }
}





export { Physics }
