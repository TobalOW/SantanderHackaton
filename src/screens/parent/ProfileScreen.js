/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, ImageBackground, Dimensions} from "react-native";
import {ListItem, Button} from "react-native-elements";
import {Constants} from "expo";
import {Divider} from "react-native-elements";
import Navbar from "../../components/Navbar";

export default class MainScreen extends Component {
  writeContent(content, price) {
    return (
      <View style={{height: 20}}>
        <View
          style={{
            flex: 1,
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
                flexDirection: "row",
                alignItems: 'center'
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
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/BG.jpg')} style={{ height: Dimensions.get('window').height }}>
          <View style={{ flex: 1 }}>
            <Navbar
              openDrawer={() => this.props.navigation.openDrawer()}
              goTask={() => this.props.navigation.navigate("main")}
            />
          <View style={{ justifyContent: 'center', width: Dimensions.get('window').width }}>
            <View style={{ padding: 15}}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Cuenta Corriente</Text>
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
                    $5.128.128
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', width: Dimensions.get('window').width }}>
            <View style={{ padding: 15}}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Monto Máximo: Cristobal</Text>
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
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  flex: 1
                }}
              >
                <Text style={{fontSize: 17, marginLeft: 130}}>
                  $996.064
                </Text>
                <View
                  style={{
                    flex: 1,
                    marginLeft: 100,
                    flexDirection: "row",
                    alignItems: 'center'
                  }}
                >
                  <Text style={{fontWeight: "bold", color: "red"}}>...</Text>
                </View>
              </View>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', width: Dimensions.get('window').width }}>
            <View style={{ padding: 15}}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Monto Máximo: Ignacio</Text>
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
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flex: 1
                  }}
                >
                  <Text style={{fontSize: 17, marginLeft: 130}}>
                    $892.192
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 100,
                      flexDirection: "row",
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{fontWeight: "bold", color: "red"}}>...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', width: Dimensions.get('window').width }}>
            <View style={{ padding: 15}}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Monto Máximo: Nicolás</Text>
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
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flex: 1
                  }}
                >
                  <Text style={{fontSize: 17, marginLeft: 130}}>
                    $981.485
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 100,
                      flexDirection: "row",
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{fontWeight: "bold", color: "red"}}>...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 80 }}>
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
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >
                  <Text style={{fontSize: 17, textAlign: 'left', color: 'red' }}>
                    +
                  </Text>
                  <Text style={{marginLeft: 95, fontSize: 17, textAlign: 'center' }}>
                    Añadir miembro
                  </Text>
                </View>
              </View>
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
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginTop: "4%",
    color: "black"
  },
  childContainer: {
    paddingLeft: 8,
    borderRadius: 25,
    height: 70,
    margin: 10,
    backgroundColor: "white"
  }
});
