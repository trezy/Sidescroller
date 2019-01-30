import { Image } from 'react-native'
import React from 'react'





class AnimatedSprite extends React.Component {
  frameIndex = 0
  ticksSinceLastUpdate = 1

  componentWillUpdate (nextProps) {
    if (this.props.currentCycle !== nextProps.currentCycle) {
      this.frameIndex = 0
      this.ticksSinceLastUpdate = 1
    }
  }

  render () {
    const {
      currentCycle,
      cycles,
      fps,
      frameSize,
      source,
      spriteWidth,
    } = this.props

    const frames = cycles[currentCycle]
    const frame = frames[this.frameIndex]
    const frameX = -frameSize[0]* (frame - 1)

    if (this.ticksSinceLastUpdate >= (60 / fps)) {
      if (this.frameIndex === (frames.length - 1)) {
        this.frameIndex = 0
      } else {
        this.frameIndex += 1
      }

      this.ticksSinceLastUpdate = 1
    } else {
      this.ticksSinceLastUpdate += 1
    }

    return (
      <Image
        style={{
          ...(this.props.style || {}),
          transform: [
            { translate: [frameX, 0] },
          ],
          height: frameSize[0],
          width: spriteWidth,
        }}
        source={source} />
    )
  }
}





export { AnimatedSprite }
