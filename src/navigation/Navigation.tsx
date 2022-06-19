//vendor
import React from 'react';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../Screens/HomeScreen';
import {LoginScreen} from '../Screens/LoginScreen';
import {BoxScreen} from '../Screens/BoxScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: {name: string} | undefined;
  BoxScreen: undefined;
  BoxComponentSon: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="BoxScreen" component={BoxScreen} />
    </Navigator>
  );
};

export default StackNavigator;
