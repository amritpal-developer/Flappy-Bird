import React from 'react';
import Matter from 'matter-js';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
const Bird = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const HeightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - HeightBody / 2;
  const color = props.color;
  return (
    <Image
      style={{
        // borderWidth: 1,
        // borderColor: color,
        // borderStyle: 'solid',
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: 40,
        height: 40,
        borderRadius: 100,
      }}
      source={require('../assets/bird.png')}
      resizeMode="cover"
      >

      </Image>
  );
};
export default (world, color, position, size) => {
  const initialBird = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: 'Bird',
    },
  );
  Matter.World.add(world, initialBird);
  return {
    body: initialBird,
    color,
    position,
    renderer: <Bird />,
  };
};
const styles = StyleSheet.create({});
