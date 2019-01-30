const CleanUp = (state, { touches, screen }) => {
  // const { world } = state['physics']

  // const entitiesToClean = Object.keys(state).filter(key => {
  //   const entityHasBody = state[key].body

  //   if (entityHasBody) {
  //     const entityHasEscaped = state[key].body.position.y > screen.height * 2

  //     return entityHasEscaped
  //   }

  //   return false
  // })

  // for (const entityKey of entitiesToClean) {
  //   Matter.Composite.remove(world, state[entityKey].body)
  //   delete state[entityKey]
  // }

  return state
}





export { CleanUp }
