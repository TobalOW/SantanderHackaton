/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, ImageBackground, Dimensions} from "react-native";
import {ListItem, Divider} from "react-native-elements";
import {Constants} from "expo";
import Navbar from "../../components/Navbar";
import {Dropdown} from "react-native-material-dropdown";
import Feather from "react-native-vector-icons/Feather";
import CheckBox from "react-native-check-box";

export default class RewardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childSelected: "Niño 1",
      data: [
        {
          child: "Niño 1",
          values: [
            {
              id: 1,
              name: "Torneo de futbol",
              price: "$15.000"
            },
            {
              id: 2,
              name: "Juego de Switch",
              price: "$45.000"
            },
            {
              id: 3,
              name: "Baile de fortnite",
              price: "$7.000"
            }
          ]
        },
        {
          child: "Niño 2",
          values: [
            {
              id: 1,
              name: "Torneo de basquetbol",
              price: "$20.000"
            },
            {
              id: 2,
              name: "Juego de PS4",
              price: "$35.000"
            },
            {
              id: 3,
              name: "Skin de LOL",
              price: "$7.000"
            }
          ]
        },
        {
          child: "Niño 3",
          values: [
            {
              id: 1,
              name: "Concierto",
              price: "$80.000"
            },
            {
              id: 2,
              name: "Control PS4",
              price: "$30.000"
            },
            {
              id: 3,
              name: "Silla de escritorio",
              price: "$40.000"
            }
          ]
        }
      ]
    };
  }

  renderCards(item) {
    return (
      <View style={{height: 40 }}>
        <View
          style={{
            paddingLeft: 25,
            paddingTop: 10,
            paddingBottom: 9,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text>{item.name}</Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingRight: 25
            }}
          >
            <Text style={{fontWeight: "bold", color: "red"}}>
              -{item.price}
            </Text>
          </View>
        </View>
        {item.id < 3 ? <Divider style={{backgroundColor: "black"}} /> : null}
      </View>
    );
  }

  renderViewCards() {
    const dataAux = this.state.data.find(
      val => val.child === this.state.childSelected
    );
    return (
      <View>
        <View
          style={{
            height: 120,
            borderRadius: 20,
            backgroundColor: "white",
            margin: 15
          }}
        >
          <FlatList
            data={dataAux.values}
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

  render() {
    let children = [{value: "Niño 1"}, {value: "Niño 2"}, {value: "Niño 3"}];
    return (
      <View style={[styles.container, {backgroundColor: "#D7D6D6"}]}>
        <ImageBackground source={require('../../assets/BG.jpg')} style={{ height: Dimensions.get('window').height }}>
          <View style={{ flex: 1 }}>
            <Navbar
              openDrawer={() => this.props.navigation.openDrawer()}
              goTask={() => this.props.navigation.navigate("main")}
            />
            <Dropdown
              label={'Hijo/a'}
              data={children}
              value={this.state.childSelected}
              onChangeText={value => this.setState({childSelected: value})}
              containerStyle={{
                marginTop: "6%",
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#FFFF",
                paddingTop: 1,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 1,
                borderRadius: 25
              }}
            />
            <View style={{height: "100%"}}>{this.renderViewCards()}</View>
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
