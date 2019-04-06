/* @flow */

import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import {Image, Input, Button, Card} from "react-native-elements";
import FormInput from "../components/FormInput";

import {authServices} from "../services/Auth";
import {storageServices} from "../services/Storage";

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      loadingButton: false,
      error: ""
    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  login() {
    const {user, password} = this.state;
    this.setState({
      loadingButton: true,
      error: ""
    });
    authServices
      .login(user, password)
      .then(res => {
        if (res.data.status === "success") {
          this.setState({
            loadingButton: false
          });
          //necesito el tipo child o parent
          if (res.data.type === "parent") {
            this.props.navigation.navigate("parentApp");
          } else if (res.data.type === "child") {
            this.props.navigation.navigate("childApp");
          }
        } else if (res.data.status === "fail") {
          this.setState({
            loadingButton: false,
            error: res.data.messages[0]
          });
        }
      })
      .catch(() =>
        this.setState({
          error: "Error en el servidor",
          loadingButton: false
        })
      );
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: "#ED0F21"}]}>
        <View containerStyle={{height: "70%", padding: 0}}>
          <View
            style={{
              height: "25%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./../assets/logo-santander.png")}
              style={[styles.img, {maxWidth: "80%"}]}
            />
          </View>
          <View
            style={{
              height: "25%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./../assets/chanchito.png")}
              style={[styles.img, {marginBottom: 40, maxWidth: "100%"}]}
            />
          </View>

          <View style={{height: "50%", width: "100%", padding: 0}}>
            <FormInput
              onChangeText={v => this.onChangeText("user", v)}
              placeholder="Correo o Usuario"
              value={this.state.user}
              keyboardType="email-address"
              placeholderTextColor="#7384B4"
            />

            <FormInput
              onChangeText={v => this.onChangeText("password", v)}
              placeholder="Contraseña"
              value={this.state.password}
              keyboardType="default"
              isPassword
              placeholderTextColor="#7384B4"
            />
            <View style={{padding: 10}}>
              <Button
                buttonStyle={{
                  backgroundColor: "#305DDD",
                  borderRadius: 40,
                  height: 50
                }}
                title="Ingresar"
                loading={this.state.loadingButton}
                onPress={() => this.login()}
              />
            </View>
            <Text style={styles.textStyle}> ¡ Registrate aqui ! </Text>
            <Text style={styles.errorTextStyle}> {this.state.error} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: "center",
    color: "white",
    padding: 5
  },
  img: {
    flex: 1,
    resizeMode: "contain"
  },
  textStyle: {
    fontSize: 17,
    alignSelf: "center",
    color: "white",
    padding: 5
  }
});
