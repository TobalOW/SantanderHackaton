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

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    const icon = this.state.active
      ? require("../../assets/VN07.png")
      : require("../../assets/VN03a.png");

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
              <View style={{width: 50, height: 50}} />
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
