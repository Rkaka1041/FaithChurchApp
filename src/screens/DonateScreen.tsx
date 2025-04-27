import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DonateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Donate to Faith Lake Forest Church!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', color: 'orange' },
});