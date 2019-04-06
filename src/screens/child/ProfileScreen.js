/* @flow */

import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import {Button} from "react-native-elements";
import {Constants} from "expo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }

  render() {
    let icon = require("../../assets/VN08.png");
    if (this.state.active === 2 ) {
      icon = require("../../assets/VN08a.png");
    }
    if (this.state.active === 3) {
      icon = require("../../assets/VN08b.png");
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={icon}
          style={{height: Dimensions.get("window").height}}
        >
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.openDrawer()}
              style={{padding: 10}}
            >
              <View style={{width: 100, height: 100}} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.setState({
                active: 3
              })}
            >
              <View style={{width: 50, height: 50, marginLeft: 50, marginTop: 20}} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.setState({
                active: 2
              })}
              style={{padding: 10}}
            >
              <View style={{width: 300, height: 50, marginTop: 300, marginLeft: 40}} />
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
