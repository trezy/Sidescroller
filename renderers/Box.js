import React from 'react'
import { View } from 'react-native'

let foo = false





class Box extends React.Component {
  render () {
    const {
      body,
      color,
      screen,
      size,
    } = this.props
    const height = size[1]
    const width = size[0]
    const angle = body.angle

    const x = body.position.x - width / 2
    const y = body.position.y - height / 2

    const halfHeight = height / 2
    const halfWidth = width / 2

    const boxHasEscapedBottom = (y - halfHeight) > screen.width
    const boxHasEscapedLeft = (x + halfWidth) < 0
    const boxHasEscapedRight = (x - halfWidth) > screen.width
    const boxHasEscapedTop = (y + halfHeight) < 0

    const boxHasEscapedHorizontally = boxHasEscapedLeft || boxHasEscapedRight
    const boxHasEscapedVertically = boxHasEscapedBottom || boxHasEscapedTop

    if (boxHasEscapedHorizontally && boxHasEscapedVertically) {
      return null
    }

    return (
      <View
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          transform: [{ rotate: angle + 'rad' }],
          backgroundColor: color || 'pink'
        }} />
    )
  }
}





export { Box }
