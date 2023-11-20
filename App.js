import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import entities from './src/entities';
import Physics from './physics';
import Sound from 'react-native-sound';
export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  // useEffect(() => {
  //   setRunning(true);
  // }, []);

  return (
    // <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./src/assets/bg.png')} style={styles.bg}>
      <Text
        style={[styles.points, Platform.OS == 'android' ? {} : {top: '5%'}]}>
        {currentPoints}
      </Text>
      <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        onEvent={e => {
          switch (e.type) {
            case 'game_over':
              setRunning(false);
              gameEngine.stop();
              setCurrentPoints(0);
              break;
            case 'new_point':
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        running={running}
        style={styles.gameEngine}></GameEngine>
      {!running ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setCurrentPoints(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}>
            <Text style={styles.text}>START GAME</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ImageBackground>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor:'red'
  },
  bg: {
    flex: 1,
  },
  points: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
    color: 'black',
  },
  gameEngine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  btn: {backgroundColor: 'black', paddingHorizontal: '5%'},
  text: {fontWeight: 'bold', color: 'white', fontSize: 30},
});
