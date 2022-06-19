//vendor
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
//navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Navigation';

export const BoxComponentSon = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.BoxSetting}>
      <Text style={styles.green}>Soy Componente Hijo</Text>
      <Button
        title="Te envio a HomeScreen"
        color="#9c9c9c"
        accessibilityLabel="Learn more about this Grey button"
        onPress={() =>
          navigation.navigate('LoginScreen', {
            name: 'Are you sure love typescript ??',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  green: {
    color: 'black',
    fontSize: 20,
    marginTop: 100,
    height: 150,
    backgroundColor: '#84b17f',
  },
  BoxSetting: {
    width: 300,
  },
  button: {
    width: 100,
  },
});

