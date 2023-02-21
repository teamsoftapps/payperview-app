import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/authScreens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="signup" component={SplashScreen1} /> */}
      <Stack.Screen name="loginscreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
