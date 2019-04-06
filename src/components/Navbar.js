/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 5 }}>
          <Feather
            name="menu"
            color={'white'}
            style={{ fontSize: 30 }}
            onPress={() => this.props.openDrawer()}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ width: 60, backgroundColor: 'white', height: 30, borderRadius: 15, marginRight: 5 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text
              onPress={() => this.props.goTask()}
              style={{ color: 'red' }}
              >+<Text style={{ color: 'black' }}>5</Text></Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#ED0F21',
    flexDirection: 'row'
  }
});
