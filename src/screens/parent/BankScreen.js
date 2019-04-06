/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Dimensions, ImageBackground} from "react-native";
import {ListItem} from "react-native-elements";
import {Constants} from "expo";
import Feather from "react-native-vector-icons/Feather";

import Navbar from "../../components/Navbar";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class BankScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/BG.jpg')} style={{ height: Dimensions.get('window').height }}>
          <View style={{ flex: 1 }}>
            <Navbar
              openDrawer={() => this.props.navigation.openDrawer()}
              goTask={() => this.props.navigation.navigate("main")}
            />
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
                      Monto Guardado:
                      <Text style={{fontWeight: "bold"}}> $8000</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{flex: 1, alignItems: "center", paddingTop: 30}}
              >
                <Image
                  style={{
                    width: SCREEN_WIDTH - 20,
                    height: 350,
                    resizeMode: "contain"
                  }}
                  source={require("../../assets/Calendario.png")}
                />
              <Text style={{fontSize: 17, color: "white", marginTop: 13}}>
                  ¡Racha de <Text style={{fontWeight: "bold"}}>12 días</Text>!
                </Text>
              </View>
            </View>
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
