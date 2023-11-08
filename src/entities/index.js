import Matter from 'matter-js';
import Bird from '../components/Bird';
import floor from '../components/floor';
import {Dimensions} from 'react-native';
import obstacle from '../components/obstacle';
import {getPipeSizePosPair} from '../utils/random';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default restart => {
  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.4;
  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth*0.9);
  return {
    physics: { engine, world },

    Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),

    ObstacleTop1: obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
    ObstacleBottom1: obstacle(world, 'ObstacleBottom1', 'blue', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

    ObstacleTop2: obstacle(world, 'ObstacleTop2', 'red', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
    ObstacleBottom2: obstacle(world, 'ObstacleBottom2', 'blue', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

    Floor: floor(world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 50, width: windowWidth })
}
};
