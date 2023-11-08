import React from 'react';
import Matter from 'matter-js';
import {ImageBackground, StyleSheet,View} from 'react-native';
const Floor = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const HeightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - HeightBody / 2;
  const color=props.color;
  return (
    <ImageBackground
    source={require('../assets/track.jpg')}
    resizeMode="cover"
      style={{
      backgroundColor:color, 
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: HeightBody,
      }}>
        
      </ImageBackground>
  );
};
export default (world, color, position, size) => {
  const initialFloor = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: 'Floor',
      isStatic:true
    },
  )
  Matter.World.add(world, initialFloor);
  return {
    body: initialFloor,
    color,
    position,
    renderer: <Floor/>,
  };
};
const styles = StyleSheet.create({

});
