import React from 'react';
import {View, Text, Button} from 'react-native';

interface Hola {
  navigation: any;
}

export const HomeScreen: React.FC<Hola> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('LoginScreen', {name: 'Juan'})}
        title="Soy un boton"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
