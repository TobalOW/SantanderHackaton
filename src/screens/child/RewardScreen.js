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
        <Navbar
          openDrawer={() => this.props.navigation.openDrawer()}
          goTask={() => this.props.navigation.navigate('main')}
        />
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}> Tareas Diarias </Text>
        </View>
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
