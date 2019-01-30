import React from 'react'
import {
  Text,
  View,
} from 'react-native'





let foo = false
class Entity extends React.Component {
  imagePath = '../assets/tiles/'

  render () {
    const {
      body,
      children,
      screen,
      size,
    } = this.props
    const height = size[1]
    const width = size[0]

    const halfHeight = height / 2
    const halfWidth = width / 2

    const x = body.position.x - halfWidth
    const y = body.position.y - halfHeight

    // const boxHasEscapedBottom = (y - halfHeight) > screen.width
    // const boxHasEscapedLeft = (x + halfWidth) < 0
    // const boxHasEscapedRight = (x - halfWidth) > screen.width
    // const boxHasEscapedTop = (y + halfHeight) < 0

    // const boxHasEscapedHorizontally = boxHasEscapedLeft || boxHasEscapedRight
    // const boxHasEscapedVertically = boxHasEscapedBottom || boxHasEscapedTop
    // const boxHasEscaped = boxHasEscapedHorizontally && boxHasEscapedVertically

    // if (boxHasEscaped) {
    //   return null
    // }

    // if (foo !== x) {
    //   foo = x
    //   console.log('entity x:', x)
    // }

    const styles = {
      ...(this.props.style || {}),
      position: 'absolute',
      left: x,
      overflow: 'hidden',
      top: y,
      width: width,
      height: height,
    }

    return (
      <View style={styles}>
        {children}
      </View>
    )
  }
}





export { Entity }
