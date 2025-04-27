import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VisitorFormScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Visitor Form Screen</Text>
    </View>
  );
};

export default VisitorFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});