/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { authServices } from '../services/Auth';
import { storageServices } from '../services/Storage';

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      user: 'cristobalmiranda1@gmail.com',
      password: '123456',
      loadingButton: false,
      error: ''
    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  login() {
    const { user, password } = this.state;
    this.setState({
      loadingButton: true,
      error: ''
    });
    authServices.login(user, password)
      .then(res => {
        if (res.data.status === 'success') {
          this.setState({
            loadingButton: false
          });
          //necesito el tipo child o parent
          storageServices.setItem('token', res.data.token)
            .then(() => {
              this.props.navigation.navigate('parentApp');
            });
        } else if (res.data.status === 'fail') {
          this.setState({
            loadingButton: false,
            error: res.data.messages[0]
          });
        }
      })
      .catch(() => this.setState({
        error: 'Error en el servidor',
        loadingButton: false
      }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Input
            placeholder='Usuario'
            leftIcon={{ type: 'font-awesome', name: 'user', marginRight: 5 }}
            onChangeText={(v) => this.onChangeText('user', v)}
            value={this.state.user}
          />
          <Input
            placeholder='Contraseña'
            leftIcon={{ type: 'font-awesome', name: 'lock', marginRight: 5 }}
            secureTextEntry
            onChangeText={(v) => this.onChangeText('password', v)}
            value={this.state.password}
          />
        <View style={{ padding: 10 }}>
          <Button
            title="Ingresar"
            loading={this.state.loadingButton}
            onPress={() => this.login()}
          />
          </View>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
    padding: 5
  },
});
