import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Navigation';

type TypeLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export const LoginScreen: React.FC<TypeLoginScreenProps> = ({
  navigation,
  route,
}) => {
  const name = route.params?.name;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, marginBottom: 40}}>LoginScreen</Text>
      <Button
        title="Soy un boton"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigation.navigate('BoxScreen')}
      />

      <Text style={{marginTop: 40, fontWeight: 'bold'}}>{name}</Text>
    </View>
  );
};
