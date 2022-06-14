import {View, Text, Button} from 'react-native';
import React from 'react';

export const LoginScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LoginScreen</Text>
      <Button
        title="Te envio a BoxScreen"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
