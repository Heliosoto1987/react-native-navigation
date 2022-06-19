import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BoxComponentSon} from './BoxComponentSon';

export const BoxComponent: React.FC = () => {
  return (
    <View style={styles.redBox}>
      <Text style={styles.BoxSetup}>Soy Componente PAPA</Text>
      <BoxComponentSon />
    </View>
  );
};

const styles = StyleSheet.create({
  redBox: {
    height: 400,
    width: 400,
    backgroundColor: '#b7a6a6',
  },
  BoxSetup: {
    fontWeight: 'bold',
    justifyContent: 'space-around',
    fontSize: 30,
  },
});
