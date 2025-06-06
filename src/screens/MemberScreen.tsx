import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MemberDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Member Dashboard!</Text>
    </View>
  );
};

export default MemberDashboard;

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