import React from 'react';
import Matter from 'matter-js';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
const Obstacle = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const HeightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - HeightBody / 2;
  const color = props.color;
  return (
    <ImageBackground
    source={require('../assets/pipe.jpeg')}
     resizeMode="stretch"
      style={{
        flex:1,
        // borderWidth: 1,
        // borderColor: color,
        position: 'absolute',
        borderStyle:'solid',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: HeightBody,
        backgroundColor:'green',
        borderRadius:10
      }}>
        
      </ImageBackground>
  );
};
export default (world, label, color, position, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: label,
      isStatic: true,
    },
  );
  Matter.World.add(world, initialObstacle);
  return {
    body: initialObstacle,
    color,
    position,
    renderer: <Obstacle />,
  };
};
const styles = StyleSheet.create({});
