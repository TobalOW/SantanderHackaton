/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {ListItem, Button} from "react-native-elements";
import {Constants} from "expo";
import {Divider} from "react-native-elements";
import Navbar from "../../components/Navbar";

export default class MainScreen extends Component {
  writeContent(content, price) {
    return (
      <View style={{height: 20, backgroundColor: "transparent"}}>
        <View
          style={{
            padding: 10,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text style={{fontWeight: "bold"}}>{content}</Text>
          <View
            style={{
              width: 150,
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <Text style={{fontWeight: "bold"}}>${price}</Text>
            <View
              style={{
                width: 150,
                marginLeft: 30,
                flexDirection: "row"
              }}
            >
              <Text style={{fontWeight: "bold", color: "red"}}>...</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: "#D7D6D6"}]}>
        <Navbar
          openDrawer={() => this.props.navigation.openDrawer()}
          goTask={() => this.props.navigation.navigate("main")}
        />
        <View style={styles.childContainer}>
          {this.writeContent("Cuenta Corriente", "1.000.000")}
        </View>
        <View style={styles.childContainer}>
          {this.writeContent("Cuenta Niño 1", "100.000")}
        </View>
        <View style={styles.childContainer}>
          {this.writeContent("Cuenta Niño 2", "100.000")}
        </View>

        <View style={styles.childContainer}>
          <View style={{height: 20, backgroundColor: "transparent"}}>
            <View
              style={{
                padding: 10,
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "red",
                  fontSize: 25,
                  marginTop: -10
                }}
              >
                +
              </Text>
              <View
                style={{
                  width: 150,
                  flexDirection: "row"
                }}
              >
                <Text style={{fontWeight: "bold"}}>Añadir miembro</Text>
              </View>
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
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginTop: "4%",
    color: "black"
  },
  childContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
    height: "7%",
    marginVertical: 10,
    marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: "white"
  }
});
