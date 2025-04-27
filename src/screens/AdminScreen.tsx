import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👑 Welcome Admin!</Text>
    </View>
  );
};

export default AdminScreen;

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
    color: '#0A84FF',
  },
});