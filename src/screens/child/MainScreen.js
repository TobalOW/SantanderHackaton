/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button
 } from 'react-native-elements';
 import { Constants } from 'expo';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MainScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
