import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
