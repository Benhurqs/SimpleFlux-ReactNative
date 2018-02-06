import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Screen 2
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FF00',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
