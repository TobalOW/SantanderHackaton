/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Input } from 'react-native-elements';


export default class FormInput extends Component {
  render() {
    const { placeholder, isPassword, ...otherProps } = this.props;
    return (
      <Input
        {...otherProps}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        autoCapitalize="none"
        errorStyle={styles.errorInputStyle}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    marginVertical: 10,
    backgroundColor: 'white'
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: 'white',
  },
});
