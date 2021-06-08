import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Page1 from './scene/Page1';
import Page2 from './scene/Page2';
import Page3 from "./scene/Page3"
import Page4 from './scene/Page4';
import Page5 from './scene/Page5';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#f4511e",
              height: 50,
            },

            headerTitleStyle: {
              fontSize: 20,
              color: 'white'
            },

          }}
        >
          {props => <Page1 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Page2"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#f4511e",
              height: 50,
            },

            headerTitleStyle: {
              fontSize: 20,
              color: 'white'
            },

          }}
        >
          {props => <Page2 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Page3"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#f4511e",
              height: 50,
            },

            headerTitleStyle: {
              fontSize: 20,
              color: 'white'
            },

          }}
        >
          {props => <Page3 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Page4"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#f4511e",
              height: 50,
            },

            headerTitleStyle: {
              fontSize: 20,
              color: 'white'
            },

          }}
        >
          {props => <Page4 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Page5"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#f4511e",
              height: 50,
            },

            headerTitleStyle: {
              fontSize: 20,
              color: 'white'
            },

          }}
        >
          {props => <Page5 {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;