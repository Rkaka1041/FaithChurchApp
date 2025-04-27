import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import AdminDashboard from '../screens/AdminDashboard';
import MemberDashboard from '../screens/MemberDashboard';
import VisitorFormScreen from '../screens/VisitorFormScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Who Are You?' }}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{ title: '< Back' }}
        />
        <Stack.Screen
          name="MemberDashboard"
          component={MemberDashboard}
          options={{ title: '< Back' }}
        />
        <Stack.Screen
          name="VisitorFormScreen"
          component={VisitorFormScreen}
          options={{ title: '< Back' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;