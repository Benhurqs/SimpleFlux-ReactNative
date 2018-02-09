import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {Actions} from 'react-native-router-flux'


export default class Screen1 extends Component {

  confirm() {
    Actions.screen2()
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Screen 1
        </Text>
        <Button 
          title="GO"
          onPress={this.confirm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
