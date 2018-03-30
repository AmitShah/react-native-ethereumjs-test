import React from 'react';
import './global';
const ethereumjsutil = require('ethereumjs-util');
import RNSecureKeyStore from 'react-native-secure-key-store';



import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {

    // For storing key
RNSecureKeyStore.set("key1", "value1")
  .then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

// For retrieving key
RNSecureKeyStore.get("key1")
  .then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

// For removing key
RNSecureKeyStore.remove("key1")
  .then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });   
    var hash = ethereumjsutil.sha3("hello world");
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
