import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import Page1 from './scene/Page1';
import Page2 from './scene/Page2';
import Page3 from "./scene/Page3"
import Page4 from './scene/Page4';
import Page5 from './scene/Page5';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Page1">
          {props => <Page1 {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Page2">
          {props => <Page2 {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Page3">
          {props => <Page3 {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Page4">
          {props => <Page4 {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Page5">
          {props => <Page5 {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;