import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MemberDashboard = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Member Dashboard</Text>

      {/* 🙏 Prayer Request Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PrayerRequestForm')}
      >
        <Text style={styles.buttonText}>🙏 Submit Prayer Request</Text>
      </TouchableOpacity>

      {/* Add more member features here */}
    </ScrollView>
  );
};

export default MemberDashboard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f6fc',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#4A90E2',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});