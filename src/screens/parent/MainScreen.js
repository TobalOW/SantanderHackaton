/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, ImageBackground, Dimensions} from "react-native";
import {Divider} from "react-native-elements";
import {Constants} from "expo";
import CheckBox from "react-native-check-box";
import Feather from "react-native-vector-icons/Feather";

import Navbar from "../../components/Navbar";

const data = [
  {
    id: 1,
    name: "Hacer la cama",
    price: "$500",
    difficult: "green",
    checked: true,
    h: 6
  },
  {
    id: 2,
    name: "Comprar pan",
    price: "$500",
    difficult: "blue",
    checked: false,
    h: 12
  },
  {
    id: 3,
    name: "Ordenar la pieza",
    price: "$500",
    difficult: "purple",
    checked: true,
    h: 18
  }
];

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  renderCards(item) {
    return (
      <View style={{height: 40, backgroundColor: "transparent" }}>
        <View
          style={{
            paddingLeft: 25,
            paddingTop: 10,
            paddingBottom: 9,
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: !item.checked? "white" : "transparent",
          }}
        >
          <Text >{item.name}</Text>
          <View
            style={{
              width: 150,
              justifyContent: "space-around",
              flexDirection: "row"
            }}
          >
            <Text style={{fontWeight: "bold"}}>{item.price}</Text>
            <View
              style={{
                height: item.h,
                width: item.h,
                backgroundColor: item.difficult,
                borderRadius: 10,
                alignSelf: "center"
              }}
            />
          {item.checked ?
            <Feather name="check" color={"green"} style={{fontSize: 20}} /> :
            <Feather name="x" color={"red"} style={{fontSize: 20}} />
          }
          </View>
        </View>
        {item.id < 3 ? <Divider style={{backgroundColor: "black"}} /> : null}
      </View>
    );
  }

  renderViewCards() {
    return (
      <View style={{height: 170}}>
        <View
          style={{
            height: 120,
            borderRadius: 25,
            backgroundColor: "#E6E6E6",
            margin: 15
          }}
        >
          <FlatList
            data={data}
            renderItem={({item}) => this.renderCards(item)}
          />
        </View>
        <View style={{flex: 1, alignItems: "flex-end", marginRight: 10}}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "white",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Feather name="plus" color={"red"} style={{fontSize: 20}} />
          </View>
        </View>
      </View>
    );
  }

  renderContent() {
    return (
      <View style={{flex: 1, paddingTop: 10}}>
        <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>
          Tareas Diarias
        </Text>
        {this.renderViewCards()}
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/BG.jpg')} style={{ height: Dimensions.get('window').height }}>
          <View style={{ flex: 1 }}>
            <Navbar
              openDrawer={() => this.props.navigation.openDrawer()}
              goTask={() => this.props.navigation.navigate("main")}
            />
            {this.renderContent()}
            <View style={{flex: 1}}>
              <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>
                Tareas Especiales
              </Text>
              {this.renderViewCards()}
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
