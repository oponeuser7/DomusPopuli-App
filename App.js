import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoomList from './RoomList'
import WriteCheckList from './WriteCheckList'
import RoomMade from './RoomMade'
import Logo from './Logo'
import Login from './Login'

const Stack = createNativeStackNavigator();

const app = () => {
  const [loaded, setLoaded] = useState(false);
  const timer = async() => {
    setTimeout(() => {setLoaded(true)}, 3000);
  }
  timer();
  return loaded ? (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="RoomList"
          component={RoomList}
        />
        <Stack.Screen
          name="WriteCheckList"
          component={WriteCheckList}
        />
        <Stack.Screen
          name="RoomMade"
          component={RoomMade}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (<Logo/>);
};



export default app;
