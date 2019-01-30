import {
  Image,
  PixelRatio,
  View,
} from 'react-native'
import React from 'react'





const TiledImage = props => {
  const {
    size,
    tile,
    tileSize,
  } = props

  const styles = {
    height: tileSize,
    overflow: 'hidden',
    width: tileSize,
  }
  const tiles = []

  let tilesToRender = Math.ceil(size[0] / tileSize)

  while (tiles.length < tilesToRender) {
    tiles.push((
      <Image
        key={tiles.length}
        source={tile}
        style={styles} />
    ))
  }

  return (
    <View style={{
      ...props.style,
      flex: 1,
      flexDirection: 'row',
      height: size[1],
      overflow: 'hidden',
      position: 'relative',
      width: size[0],
    }}>
      {tiles}
    </View>
  )
}





export { TiledImage }
