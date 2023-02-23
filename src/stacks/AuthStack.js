import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignUpFromScreen from '../screens/authScreens/SignUpFromScreen';
import HomeScreen from '../screens/appScreens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="signup" component={SplashScreen1} /> */}
      <Stack.Screen name="loginscreen" component={LoginScreen} />
      <Stack.Screen name="signupscreen" component={SignUpFromScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
