import React from 'react';
import {View, Text, Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Navigation';

type TypeHomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

export const HomeScreen: React.FC<TypeHomeScreenProps> = ({navigation, route}) => {
  console.log(route)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('LoginScreen', {
            name: 'Are you sure love typescript ??',
          })
        }
        title="Soy un boton"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
