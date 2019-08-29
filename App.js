import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator({
      Home: HomeScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Random Color App'
      }
    }
);

export default createAppContainer(navigator);
