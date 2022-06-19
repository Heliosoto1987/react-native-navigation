import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BoxComponent} from '../components/BoxComponent';

export const BoxScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.Box}>BoxScreen</Text>
      <BoxComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    fontSize: 50,
    marginBottom: 20,
  },
});
