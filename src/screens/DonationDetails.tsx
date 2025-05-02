// src/screens/DonationDetails.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DonationDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Support Our Mission 🙏</Text>

      <Text style={styles.sectionTitle}>📨 Zelle</Text>
      <Text style={styles.text}>donate@faithlakeforest.org</Text>

      <Text style={styles.sectionTitle}>💳 PayPal</Text>
      <Text style={styles.text}>https://paypal.me/faithchurchdonate</Text>

      <Text style={styles.sectionTitle}>🏦 Bank Transfer</Text>
      <Text style={styles.text}>Bank: Church Community Bank</Text>
      <Text style={styles.text}>Account: Faith Lutheran Church</Text>
      <Text style={styles.text}>ACC No: 123456789</Text>
      <Text style={styles.text}>Routing No: 987654321</Text>

      <Text style={styles.note}>
        Thank you for your support. Every contribution helps continue God's work.
      </Text>
    </ScrollView>
  );
};

export default DonationDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: '#444',
  },
  text: {
    fontSize: 16,
    marginTop: 4,
    color: '#555',
  },
  note: {
    marginTop: 30,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
  },
});