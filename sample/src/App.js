/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, StatusBar, StyleSheet } from 'react-native';
import Screen1 from './Screen1'
import Screen2 from './Screen2'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
       backgroundColor='#000'/>
      <Router>
        <Scene key="root">
          <Scene key="screen1"
            component={Screen1}
            hideNavBar={true}
            initial
          />
          <Scene key="screen2"
            component={Screen2}
          />

        </Scene>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});


export default App;