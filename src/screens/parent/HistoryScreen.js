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

export default class HistoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { params = {} } = navigation.state;
    return {
      headerLeft:
        <Button
          title=''
          containerStyle={{ paddingLeft: 10 }}
          type='clear'
          icon={
            <Icon
              name='menu'
              size={40}
              color='#e13f4c'
            />
          }
          onPress={() => navigation.openDrawer()}
        />,
      // headerRight:
      //   <Button
      //     title=''
      //     clear
      //     containerStyle={{ paddingRight: 10 }}
      //     icon={
      //       <IconEvilIcons
      //         name='search'
      //         size={40}
      //         color='#e13f4c'
      //       />
      //     }
      //   />,
      headerTransparent: true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the HistoryScreen component</Text>
          <Button
            title="Ingresar"
            onPress={() => this.props.navigation.openDrawer()}
          />
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
