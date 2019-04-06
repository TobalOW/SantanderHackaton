/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  Divider
 } from 'react-native-elements';
 import { Constants } from 'expo';
 import CheckBox from 'react-native-check-box';

 import Navbar from '../../components/Navbar';

 const data = [
   { id: 1, name: 'Hacer la cama', price: '$500', difficult: 'green', checked: true },
   { id: 2, name: 'Comprar pan', price: '$500', difficult: 'blue', checked: false },
   { id: 3, name: 'Ordenar la pieza', price: '$500', difficult: 'purple', checked: true },
 ];

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  renderCards(item) {
    return (
      <View style={{ height: 40, backgroundColor: 'transparent' }}>
        <View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <View style={{ width: 150, justifyContent: 'space-around', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
            <View style={{ height: 10, width: 10, backgroundColor: item.difficult, borderRadius: 10 }} />
            <CheckBox
              style={{ height: 7, width: 7 }}
              onClick={() => {
                this.setState({
                    isChecked: !this.state.isChecked
                });
              }}
              isChecked={true}
            />
          </View>
        </View>
        {item.id < 3 ? <Divider style={{ backgroundColor: 'black' }} /> : null }
      </View>
    );
  }

  renderViewCards() {
    return (
      <View style={{ height: 120, borderRadius: 25, backgroundColor: 'white', margin: 5 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => this.renderCards(item)}
        />
      </View>
    );
  }

  renderContent() {
    return (
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        {this.renderViewCards()}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar
          openDrawer={() => this.props.navigation.openDrawer()}
        />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
