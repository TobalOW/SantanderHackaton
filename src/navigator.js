import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import drawerContentComponents from './drawerContentComponents';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';

const LogInStack = createStackNavigator({
  auth: { screen: AuthScreen },
},
{ headerMode: 'screen' }
);


const AppStack = createStackNavigator({
  main: { screen: MainScreen },
  },
  {
  initialRouteName: 'main'
  }
);

AppStack.navigationOptions = () => {
  const drawerLockMode = 'locked-closed';
  return {
    drawerLockMode,
  };
};

const drawerStack = createDrawerNavigator({
  home: { screen: AppStack }
}, {
  contentComponent: drawerContentComponents,
}
);

export const Main = createSwitchNavigator({
    app: { screen: drawerStack },
  logIn: { screen: LogInStack },

},
{
  navigationOptions: {
    tabBarVisible: false
  },
  lazyLoad: true
});

export const MainNavigator = createAppContainer(Main);
