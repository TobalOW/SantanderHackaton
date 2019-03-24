import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, Dimensions, Alert } from 'react-native';
import { Avatar, Button, Divider } from 'react-native-elements';
import { Constants } from 'expo';

const window = Dimensions.get('window');
const TOP_DRAWER = window.height * 0.35;
const DOWN_DRAWER = window.height * 0.65;


class drawerContentComponents extends Component {
  async onLogOut() {
    this.props.navigation.navigate('auth', { fromLogout: true });
    //funcion to logout or remove token
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  logOut() {
    Alert.alert(
      '¿Estás seguro?',
      'Se cerrará tu sesión actual',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Si', onPress: () => this.onLogOut() },
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarStyle}>
          <View
            style={styles.topStyle}
          >
            <Avatar
              rounded
              size="large"
              icon={{ name: 'user', color: '#b6b93d', type: 'font-awesome' }}
              overlayContainerStyle={{ backgroundColor: 'white' }}
              activeOpacity={0.7}
            />
            <Text
              style={styles.displayNameStyle}
            >
              Nombre
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <Button
              title="Favoritos"
              titleStyle={{ textAlign: 'center', flex: 1, color: 'white' }}
              raised={false}
              buttonStyle={{
                backgroundColor: '#e13f4c',
                borderColor: 'white',
                borderWidth: 2
              }}
              icon={{ color: 'white', name: 'star', type: 'font-awesome' }}
              containerStyle={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 1 }}
              onPress={this.navigateToScreen('liked')}
            />

          </View>
        </View>
        <ScrollView style={{ height: DOWN_DRAWER }}>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('settings')}>
              Configuración
            </Text>
            <Divider style={{ backgroundColor: '#e13f4c' }} />
            <Text style={styles.navItemStyle} onPress={() => this.logOut()}>
              Cerrar sesión
            </Text>
            <Divider style={{ backgroundColor: '#e13f4c' }} />
            <Divider style={{ backgroundColor: '#e13f4c' }} />
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Text style={{ color: '#e13f4c', fontSize: 10 }}>v{ Constants.manifest.version }</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayNameStyle: {
    textAlign: 'center',
    width: 100,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  topStyle: {
    height: TOP_DRAWER * 0.5,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navItemStyle: {
    padding: 20,
    color: '#e13f4c',
    fontSize: 15,
    textAlign: 'center'
  },
  navSectionStyle: {
    backgroundColor: 'white'
  },
  avatarStyle: {
    height: TOP_DRAWER,
    backgroundColor: '#E13F4C',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'space-around'
  },
  footerContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
});


export default drawerContentComponents;
