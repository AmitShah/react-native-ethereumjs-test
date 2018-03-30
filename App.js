import React from 'react';
import './global';
const ethereumjsutil = require('ethereumjs-util');


import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    var hash = ethereumjsutil.sha3("hellow world");
    console.log(hash.toString('hex'));
  }

  render() {
    `console.log(ethereumjsutil)`
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
