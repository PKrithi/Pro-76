import { StackView } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator intialRoutename="Home" screenOptions={{
        headerShown: false
      }}>
        <StackView.Screen name="Home" component={HomeScreen} />
        <StackView.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <StackView.Screen name="DailyPic" component={DailyPicScreen} />
        <StackView.Screen name="StarMap" component={StarMapScreen} />
      </StackView.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

