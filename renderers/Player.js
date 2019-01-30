import { Image } from 'react-native'
import React from 'react'





import {
  Entity,
  AnimatedSprite,
} from '.'





const Player = props => {
  const newProps = { ...props }
  const source = require('../assets/sprites/player1.png')
  const { width: spriteWidth } = Image.resolveAssetSource(source)

  if (newProps.direction < 0) {
    newProps.style || (newProps.style = {})
    newProps.style.transform || (newProps.style.transform = [])

    newProps.style.transform.push({ rotateY: '180deg' })
  }

  let fps = null

  switch (props.animation) {
    case 'run':
    case 'walk':
      fps = 10
      break

    default:
      fps = 1
  }

  return (
    <Entity {...newProps}>
      <AnimatedSprite
        currentCycle={props.animation}
        cycles={{
          climb: [19, 20, 21, 22],
          hit: [9, 10, 9],
          jump: [5, 5, 5, 6, 7, 8],
          punch: [12, 14, 12],
          run: [15, 16, 17, 18],
          slash: [12, 11, 12, 13],
          stand: [1],
          walk: [1, 2, 3, 4],
        }}
        fps={fps}
        frameSize={props.size}
        size={props.size}
        source={source}
        spriteWidth={spriteWidth} />
    </Entity>
  )
}





export { Player }
