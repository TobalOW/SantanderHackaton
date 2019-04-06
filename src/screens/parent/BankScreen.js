/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import {ListItem} from "react-native-elements";
import {Constants} from "expo";
import Feather from "react-native-vector-icons/Feather";

import Navbar from "../../components/Navbar";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class BankScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          openDrawer={() => this.props.navigation.openDrawer()}
          goTask={() => this.props.navigation.navigate("main")}
        />
        <View style={{flex: 1, backgroundColor: "#D7D6D6"}}>
          <View style={{flex: 1}}>
            <View
              style={{
                backgroundColor: "white",
                margin: 10,
                height: 45,
                borderRadius: 45
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    heigth: 45,
                    padding: 13,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{fontSize: 17}}>Cristobal</Text>
                </View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingRight: 15
                  }}
                >
                  <Feather
                    name="chevron-down"
                    color={"black"}
                    style={{fontSize: 20}}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginLeft: 10,
                marginRight: 10,
                height: 45,
                borderRadius: 45
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    heigth: 45,
                    padding: 13,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{fontSize: 17}}>
                    Monto actual:
                    <Text style={{fontWeight: "bold"}}> $5000</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: "center", alignItems: "center"}}
            >
              <Image
                style={{
                  width: SCREEN_WIDTH - 20,
                  height: 400,
                  resizeMode: "contain"
                }}
                source={require("../../assets/Calendario.png")}
              />
              <Text style={{fontSize: 17, color: "black"}}>
                ¡Racha de <Text style={{fontWeight: "bold"}}>12 dias</Text>!
              </Text>
            </View>
          </View>
        </View>
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
