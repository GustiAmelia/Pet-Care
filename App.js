import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SplachScreen from './src/screens/SplachScreen';
import WelcomeScreen1 from './src/screens/WelcomeScreen1';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationFbOrGoogle from './src/screens/RegistrationFbOrGoogle';
import Register from './src/screens/Register';
import SignIn from './src/screens/SignIn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen}/>
        <Stack.Screen name='RegisterFbOrGoogle' component={RegistrationFbOrGoogle}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
      </Stack.Navigator>
      {/* <SplachScreen/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
