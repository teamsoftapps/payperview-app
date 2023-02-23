/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroStack from './src/stacks/IntroStack';
import HomeScreen from './src/screens/appScreens/HomeScreen';
import TermsAndConditions from './src/screens/appScreens/TermsAndConditions';
import SignUpFromScreen from './src/screens/authScreens/SignUpFromScreen';
import LoginScreen from './src/screens/authScreens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="authstack" component={IntroStack} /> */}
        {/* <Stack.Screen name="authstack" component={TermsAndConditions} /> */}
        <Stack.Screen name="homescreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
