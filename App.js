// Module imports
import {
  AppRegistry,
  Dimensions,
  StatusBar,
} from 'react-native'
import {
  MoveJoystick,
  MovePlayer,
  MoveView,
  Physics,
} from './systems'
import {
  Floor,
  Joystick,
  Player,
} from './renderers'
import { GameEngine } from 'react-native-game-engine'
import React from 'react'
import Matter from 'matter-js'





// Component imports
import config from './config.json'





// Setup
Matter.Common.isElement = () => false





export default class SideScroller extends React.Component {
  render () {
    const { height, width } = Dimensions.get('window')

    const floorWidth = width * 0.8
    const world = Matter.World.create({
      gravity: {
        x: 0,
        y: 2,
      },
    })
    const engine = Matter.Engine.create({
      enableSleeping: false,
      world,
    })
    const floor = Matter.Bodies.rectangle(floorWidth / 2, (height - (config.floor.depth / 2)), floorWidth, config.floor.depth, {
      friction: 1,
      frictionStatic: 1,
      isStatic: true,
      label: 'Floor',
    })
    const player = Matter.Bodies.rectangle((width / 4), (height - (config.player.size + config.floor.depth)), config.player.size, config.player.size, {
      angularVelocity: 0,
      friction: 1,
      frictionAir: 0,
      inertia: Infinity,
      label: 'Player',
    })

    Matter.World.add(world, [player, floor])

    return (
      <GameEngine
        systems={[Physics, MoveJoystick, MovePlayer, MoveView]}
        entities={{
          physics: {
            engine,
            world,
          },
          floor: {
            body: floor,
            renderer: Floor,
            size: [floorWidth, config.floor.depth],
          },
          player: {
            animation: 'stand',
            body: player,
            renderer: Player,
            size: [config.player.size, config.player.size],
          },
          joystick: {
            active: false,
            direction: [0, 0],
            maxOffset: 25,
            offset: [0, 0],
            origin: [
              width - (config.joystick.gutter.right + (config.joystick.size / 2)),
              height - (config.joystick.gutter.top + (config.joystick.size / 2)),
            ],
            renderer: Joystick,
            size: [config.joystick.size, config.joystick.size],
          },
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
    )
  }
}

AppRegistry.registerComponent('BestGameEver', () => BestGameEver)
