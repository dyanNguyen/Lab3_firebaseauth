import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/signup';
import { LoginScreen } from './screens/login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/home';
import ForgotPasswordScreen from './screens/forgetpass';

const Stack = createStackNavigator();
const App = () => {

  return (
      <SafeAreaProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;