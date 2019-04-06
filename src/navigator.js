import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import drawerContentComponents from './drawerContentComponents';
import AuthScreen from './screens/AuthScreen';
import parentMainScreen from './screens/parent/MainScreen';
import parentProfileScreen from './screens/parent/ProfileScreen';
import parentHistoryScreen from './screens/parent/HistoryScreen';
import parentBankScreen from './screens/parent/BankScreen';
import childMainScreen from './screens/child/MainScreen';

const LogInStack = createStackNavigator({
  auth: { screen: AuthScreen },
},
{ headerMode: 'screen' }
);

// Child navigator
const childAppStack = createStackNavigator({
  main: { screen: childMainScreen },
  },
  {
  initialRouteName: 'main'
  }
);

childAppStack.navigationOptions = () => {
  const drawerLockMode = 'locked-closed';
  return {
    drawerLockMode,
  };
};

const drawerChildStack = createDrawerNavigator({
  home: { screen: childAppStack }
}, {
  contentComponent: drawerContentComponents,
}
);
// Parent navigator

const ProfileTabIcon = ({ tintColor }) => (
    <Feather name="user" color={tintColor} style={{ fontSize: 20 }} />
);

const TaskTabIcon = ({ tintColor }) => (
    <MaterialCommunityIcons name="playlist-check" color={tintColor} style={{ fontSize: 20 }} />
);

const HistoryTabIcon = ({ tintColor }) => (
    <SimpleLineIcons name="graph" color={tintColor} style={{ fontSize: 20 }} />
);

const BankTabIcon = ({ tintColor }) => (
    <MaterialIcons name="attach-money" color={tintColor} style={{ fontSize: 20 }} />
);

const parentAppStack = createMaterialBottomTabNavigator({
  profile: {
    screen: parentProfileScreen,
    navigationOptions: {
      tabBarIcon: ProfileTabIcon,
      title: 'Perfil'
    }
  },
  main: {
    screen: parentMainScreen,
    navigationOptions: {
      tabBarIcon: TaskTabIcon,
      title: 'Tareas'
    }
  },
  history: {
    screen: parentHistoryScreen,
    navigationOptions: {
      tabBarIcon: HistoryTabIcon,
      title: 'Ganancias'
    }
  },
  bank: {
    screen: parentBankScreen,
    navigationOptions: {
      tabBarIcon: BankTabIcon,
      title: 'Banco'
    }
   },
  },
  {
    initialRouteName: 'main',
    activeColor: '#ED0F21',
    inactiveColor: '#333333',
    barStyle: { backgroundColor: 'white' },
  }
);

parentAppStack.navigationOptions = () => {
  const drawerLockMode = 'locked-closed';
  return {
    drawerLockMode,
  };
};

const drawerParentStack = createDrawerNavigator({
  home: { screen: parentAppStack }
}, {
  contentComponent: drawerContentComponents,
}
);

export const Main = createSwitchNavigator({
  logIn: { screen: LogInStack },
  parentApp: { screen: drawerParentStack },
  childApp: { screen: drawerChildStack },
},
{
  navigationOptions: {
    tabBarVisible: false
  },
  lazyLoad: true
});

export const MainNavigator = createAppContainer(Main);
