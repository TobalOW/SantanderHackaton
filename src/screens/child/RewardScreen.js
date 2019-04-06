/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  ListItem
} from 'react-native-elements';
 import { Constants } from 'expo';
 import Navbar from '../../components/Navbar';

export default class RewardScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>RewardScreen</Text>
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
