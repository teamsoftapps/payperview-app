import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen1 from '../screens/appScreens/SplashScreen1';
import SplashScreen2 from '../screens/appScreens/SplashScreen2';
import SplashScreen3 from '../screens/appScreens/SplashScreen3';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

export default function IntroStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splashscreen1" component={SplashScreen1} />
      <Stack.Screen name="splashscreen2" component={SplashScreen2} />
      <Stack.Screen name="splashscreen3" component={SplashScreen3} />
      <Stack.Screen name="login" component={AuthStack} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
