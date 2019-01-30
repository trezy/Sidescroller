import React from 'react'





import {
  Entity,
  TiledImage,
} from '.'





const Floor = props => {
  const layers = []

  let extraLayersToRender = Math.ceil(props.size[1] / 32) - 1
  let grassAbyss = require('../assets/tiles/abyss.png')
  let grassTile = require('../assets/tiles/grass.middle.1.png')

  while (extraLayersToRender) {
    layers.push((
      <TiledImage
        key={extraLayersToRender}
        size={[props.size[0], 32]}
        tile={grassAbyss}
        tileSize={32}
        />
    ))

    extraLayersToRender -= 1
  }

  return (
    <Entity {...props}>
      {/* Top layer */}
      <TiledImage
        size={[props.size[0], 32]}
        style={{ backgroundColor: 'green' }}
        tile={grassTile}
        tileSize={32} />

      {/* Other layers */}
      {layers}
    </Entity>
  )
}





export { Floor }
