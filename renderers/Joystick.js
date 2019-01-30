import React from 'react'
import { View } from 'react-native'





class Joystick extends React.Component {
  render () {
    const {
      direction,
      offset,
      origin,
      size,
    } = this.props
    const height = size[1]
    const width = size[0]

    let left = origin[0]
    let top = origin[1]

    if (offset) {
      left += offset[0] * direction[0]
      top += offset[1] * direction[1]
    }

    left -= (width / 2)
    top -= (height / 2)

    return (
      <View style={{
        backgroundColor: 'orange',
        borderRadius: width / 2,
        height,
        left,
        position: 'absolute',
        top,
        width,
      }} />
    )
  }
}





export { Joystick }
